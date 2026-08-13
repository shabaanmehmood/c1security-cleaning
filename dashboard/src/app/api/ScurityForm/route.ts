import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      serviceCategory,
      specificService,
      subject,
      message,
    } = await request.json();

    // Minimal server-side validation
    if (
      !firstname ||
      !lastname ||
      !email ||
      !phone ||
      !serviceCategory ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    const fullName = `${firstname} ${lastname}`;

    const result =
      await brevo.transactionalEmails.sendTransacEmail({
        sender: {
          name: "C1 Services",
          email: process.env.EMAIL_FROM!,
        },

        to: [
          {
            name: "C1 Services Admin",
            email: process.env.ADMIN_EMAIL!,
          },
        ],

        replyTo: {
          name: fullName,
          email,
        },

        subject: `New enquiry: ${subject}`,

        htmlContent: `
          <h2>New Contact Enquiry</h2>

          <h3>Customer Details</h3>

          <p>
            <strong>Name:</strong>
            ${firstname} ${lastname}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone}
          </p>

          <p>
            <strong>Service Category:</strong>
            ${serviceCategory}
          </p>

          <p>
            <strong>Specific Service:</strong>
            ${specificService || "Not specified"}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject}
          </p>

          <h3>Message</h3>

          <p>
            ${message}
          </p>
        `,
      });

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("Brevo email error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}