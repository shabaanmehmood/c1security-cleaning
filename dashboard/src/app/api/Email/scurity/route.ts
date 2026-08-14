import { NextResponse } from "next/server";
import { brevo } from "@/lib/brevo";

interface ContactRequestBody {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  serviceCategory: string;
  subject: string;
  message: string;
  specificService?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    const {
      firstname,
      lastname,
      email,
      phone,
      serviceCategory,
      subject,
      message,
      specificService,
    } = body;

    // Basic validation for required fields
    if (!firstname || !lastname || !email || !phone || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required contact form fields.",
        },
        { status: 400 }
      );
    }

    const fullName = `${firstname} ${lastname}`;

    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: process.env.BREVO_SENDER_NAME!,
        email: process.env.BREVO_SENDER_EMAIL!,
      },

      to: [
        {
          email: process.env.QUOTE_RECEIVER_EMAIL!,
          name: process.env.QUOTE_RECEIVER_NAME!,
        },
      ],

      replyTo: {
        email,
        name: fullName,
      },

      subject: `🛡️ Security Inquiry: ${subject}`,

      htmlContent: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Security Detail Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 30px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
          
          <tr>
            <td style="background-color: #1e293b; padding: 28px 32px; text-align: left; border-bottom: 3px solid #0ea5e9;">
              <span style="background-color: rgba(14, 165, 233, 0.15); color: #38bdf8; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 20px; display: inline-block; margin-bottom: 8px;">
                🛡️ Security Services Inquiry
              </span>
              <h1 style="color: #ffffff; font-size: 20px; font-weight: 700; margin: 0;">
                ${subject}
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding: 32px;">
              
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; margin-bottom: 16px;">
                    <h2 style="color: #0f172a; font-size: 15px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
                      👤 Client / Contact Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 12px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="6">
                      <tr>
                        <td width="35%" style="color: #64748b; font-size: 14px; font-weight: 500;">Full Name:</td>
                        <td width="65%" style="color: #0f172a; font-size: 14px; font-weight: 600;">${fullName}</td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">Email Address:</td>
                        <td style="color: #0284c7; font-size: 14px; font-weight: 600;">
                          <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">Phone Number:</td>
                        <td style="color: #0f172a; font-size: 14px; font-weight: 600;">
                          <a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
                    <h2 style="color: #0f172a; font-size: 15px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
                      🔒 Security Details Requested
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 12px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="6">
                      <tr>
                        <td width="35%" style="color: #64748b; font-size: 14px; font-weight: 500;">Category:</td>
                        <td width="65%" style="color: #0f172a; font-size: 14px; font-weight: 600;">
                          <span style="background-color: #f0f9ff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 8px; border-radius: 4px; font-size: 13px; font-weight: 600;">
                            ${serviceCategory || "General Security"}
                          </span>
                        </td>
                      </tr>
                      ${
                        specificService
                          ? `
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">Specific Service:</td>
                        <td style="color: #0f172a; font-size: 14px; font-weight: 600;">${specificService}</td>
                      </tr>
                      `
                          : ""
                      }
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
                    <h2 style="color: #0f172a; font-size: 15px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
                      📋 Security Requirement Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 12px;">
                    <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 14px 16px; border-radius: 0 8px 8px 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">
                Automated Security Request System • Confidential Notice
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Security inquiry submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Security contact processing error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send security inquiry",
      },
      { status: 500 }
    );
  }
}