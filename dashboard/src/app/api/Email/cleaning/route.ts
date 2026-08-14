import { NextResponse } from "next/server";
import { brevo } from "@/lib/brevo";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      service,
      firstName,
      lastName,
      company,
      address,
      city,
      region,
      contactNumber,
      email,
      description,
    } = body;


    const fullName = `${firstName} ${lastName}`;

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

      subject: `New Quote Request - ${service}`,

     htmlContent: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f6f8; padding: 30px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
          
          <tr>
            <td style="background-color: #2563eb; padding: 28px 32px; text-align: left;">
              <span style="background-color: rgba(255, 255, 255, 0.2); color: #ffffff; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 20px; display: inline-block; margin-bottom: 8px;">
                Cleaning Service
              </span>
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                New Quote Request
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding: 32px;">
              
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; margin-bottom: 16px;">
                    <h2 style="color: #0f172a; font-size: 16px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
                      👤 Customer Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 12px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="6">
                      <tr>
                        <td width="35%" style="color: #64748b; font-size: 14px; font-weight: 500;">Full Name:</td>
                        <td width="65%" style="color: #0f172a; font-size: 14px; font-weight: 600;">${firstName} ${lastName}</td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">Email:</td>
                        <td style="color: #2563eb; font-size: 14px; font-weight: 600;">
                          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">Contact Number:</td>
                        <td style="color: #0f172a; font-size: 14px; font-weight: 600;">
                          <a href="tel:${contactNumber}" style="color: #0f172a; text-decoration: none;">${contactNumber}</a>
                        </td>
                      </tr>
                      ${
                        company
                          ? `
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">Company:</td>
                        <td style="color: #0f172a; font-size: 14px; font-weight: 600;">${company}</td>
                      </tr>
                      `
                          : ""
                      }
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
                    <h2 style="color: #0f172a; font-size: 16px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
                      🧹 Service Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 12px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="6">
                      <tr>
                        <td width="35%" style="color: #64748b; font-size: 14px; font-weight: 500;">Requested Service:</td>
                        <td width="65%" style="color: #0f172a; font-size: 14px; font-weight: 600;">
                          <span style="background-color: #eff6ff; color: #1d4ed8; padding: 4px 8px; border-radius: 4px; font-size: 13px;">
                            ${service}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">Address:</td>
                        <td style="color: #0f172a; font-size: 14px; font-weight: 600;">${address}</td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">City:</td>
                        <td style="color: #0f172a; font-size: 14px; font-weight: 600;">${city}</td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 500;">Region:</td>
                        <td style="color: #0f172a; font-size: 14px; font-weight: 600;">${region}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
                    <h2 style="color: #0f172a; font-size: 16px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
                      📝 Description / Notes
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 12px;">
                    <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 16px; border-radius: 0 8px 8px 0; color: #334155; font-size: 14px; line-height: 1.6;">
                      ${description || "<em>No additional details provided.</em>"}
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                Automated Notification System • Quote Request
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
        message: "Quote request submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit quote request",
      },
      { status: 500 }
    );
  }
}