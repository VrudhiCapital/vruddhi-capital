import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      founderName,
      email,
      phone,
      startupName,
      sector,
      stage,
      website,
      oneLiner,
      message,
    } = body;

    // Basic validation
    if (!founderName || !email || !startupName || !oneLiner || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // ── EMAIL TO VRUDDHI CAPITAL TEAM ──
    await resend.emails.send({
      from: "Vruddhi Capital Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "hello@vruddhicapital.com"],
      subject: `New Pitch: ${startupName} — ${sector} (${stage})`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Georgia', serif; background: #0A0A0A; color: #F5F0EB; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { border-bottom: 1px solid #C4621D; padding-bottom: 24px; margin-bottom: 32px; }
              .logo { font-size: 24px; color: #C4621D; letter-spacing: 4px; text-transform: uppercase; }
              .label { font-family: 'Arial', sans-serif; font-size: 10px; color: #C4621D; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 4px; }
              .value { font-size: 16px; color: #F5F0EB; margin-bottom: 20px; }
              .section { background: #111111; border: 1px solid #1E1E1E; padding: 24px; margin-bottom: 16px; }
              .message-box { background: #0F0F0F; border-left: 3px solid #C4621D; padding: 20px; margin-top: 8px; }
              .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #1A1A1A; font-family: Arial, sans-serif; font-size: 11px; color: #444444; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Vruddhi Capital</div>
                <p style="color: #8A8A8A; font-family: Arial, sans-serif; font-size: 13px; margin-top: 8px;">
                  New pitch submission from your website
                </p>
              </div>

              <div class="section">
                <div class="label">Founder Name</div>
                <div class="value">${founderName}</div>

                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #C4621D;">${email}</a>
                </div>

                ${phone ? `
                <div class="label">Phone</div>
                <div class="value">${phone}</div>
                ` : ""}
              </div>

              <div class="section">
                <div class="label">Startup Name</div>
                <div class="value">${startupName}</div>

                <div class="label">Sector</div>
                <div class="value">${sector}</div>

                <div class="label">Stage</div>
                <div class="value">${stage}</div>

                ${website ? `
                <div class="label">Website / Deck</div>
                <div class="value">
                  <a href="${website}" style="color: #C4621D;">${website}</a>
                </div>
                ` : ""}
              </div>

              <div class="section">
                <div class="label">One-Line Description</div>
                <div class="value" style="font-style: italic; font-size: 18px; color: #C4621D;">
                  "${oneLiner}"
                </div>

                <div class="label">Founder Message</div>
                <div class="message-box">
                  <p style="color: #F5F0EB; line-height: 1.7; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
                </div>
              </div>

              <div class="footer">
                <p>This email was sent from the Vruddhi Capital contact form.</p>
                <p>Reply directly to this email to respond to ${founderName}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    });

    // ── CONFIRMATION EMAIL TO FOUNDER ──
    await resend.emails.send({
      from: "Vruddhi Capital <onboarding@resend.dev>",
      to: [email],
      subject: `We received your pitch — ${startupName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Georgia', serif; background: #0A0A0A; color: #F5F0EB; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { border-bottom: 1px solid #C4621D; padding-bottom: 24px; margin-bottom: 32px; }
              .logo { font-size: 24px; color: #C4621D; letter-spacing: 4px; text-transform: uppercase; }
              .body-text { font-family: Arial, sans-serif; font-size: 15px; color: #8A8A8A; line-height: 1.8; margin-bottom: 20px; }
              .highlight { color: #F5F0EB; }
              .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #1A1A1A; font-family: Arial, sans-serif; font-size: 11px; color: #444444; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Vruddhi Capital</div>
              </div>

              <p class="body-text">
                Hi <span class="highlight">${founderName}</span>,
              </p>
              <p class="body-text">
                Thank you for reaching out. We have received your pitch for 
                <span class="highlight"> ${startupName}</span> and our team will review it carefully.
              </p>
              <p class="body-text">
                If there is a potential fit, we will get back to you within 
                <span class="highlight"> 5–7 business days</span>. We appreciate your patience.
              </p>
              <p class="body-text">
                In the meantime, feel free to explore our portfolio and learn more about our
                investment thesis at <a href="https://vruddhicapital.com" style="color: #C4621D;">vruddhicapital.com</a>.
              </p>
              <p class="body-text">
                Wishing you the best,<br/>
                <span class="highlight">The Vruddhi Capital Team</span>
              </p>

              <div class="footer">
                <p>© ${new Date().getFullYear()} Vruddhi Capital · Udupi, India</p>
                <p>You received this email because you submitted a pitch at vruddhicapital.com</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
