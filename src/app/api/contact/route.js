import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, company, projectType, budget, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Infonza Contact Form <onboarding@resend.dev>",
      to: "support@infonza.com",
      replyTo: email,
      subject: `New Enquiry: ${name}${projectType ? ` — ${projectType}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1e293b;">
          <div style="background: linear-gradient(135deg, #0d9488, #2563eb); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Project Enquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">via infonza.com/contact</p>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; padding: 28px; border-radius: 0 0 12px 12px;">

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; width: 140px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px;"><a href="mailto:${email}" style="color: #0d9488;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b;">${company}</td>
              </tr>` : ""}
              ${projectType ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Project Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b;">${projectType}</td>
              </tr>` : ""}
              ${budget ? `
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Budget</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1e293b;">${budget}</td>
              </tr>` : ""}
            </table>

            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px;">
              <p style="font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">Message</p>
              <p style="font-size: 14px; color: #334155; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #0d9488, #2563eb); color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Reply to ${name} →
              </a>
            </div>

          </div>
          <p style="text-align: center; font-size: 12px; color: #94a3b8; margin-top: 20px;">Infonza Innovations · infonza.com</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
