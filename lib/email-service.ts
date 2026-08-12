import nodemailer from "nodemailer";

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  fromName?: string;
}

/**
 * Generic email dispatcher supporting Resend API & Gmail SMTP fallback.
 */
export async function sendEmail({
  to,
  subject,
  html,
  fromName = "Revival Nation",
}: SendEmailOptions): Promise<boolean> {
  const senderEmail = process.env.GMAIL_USER || process.env.EMAIL_FROM || "revivalnation40@gmail.com";
  const resendApiKey = process.env.RESEND_API_KEY;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!resendApiKey && !gmailPass) {
    console.warn(
      "[email-service] Email skipped: Neither RESEND_API_KEY nor GMAIL_APP_PASSWORD is configured."
    );
    return false;
  }

  // 1. Try Resend API if RESEND_API_KEY is configured
  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${fromName} <${senderEmail}>`,
          to: [to],
          subject,
          html,
        }),
      });

      const responseText = await res.text();
      if (res.ok) {
        console.log(`[email-service] Email successfully sent via Resend API to ${to}`);
        return true;
      }

      console.error(`[email-service] Resend API failed (HTTP ${res.status}):`, responseText);
    } catch (err) {
      console.error("[email-service] Resend API request error:", err);
    }
  }

  // 2. Try Nodemailer Gmail SMTP if GMAIL_APP_PASSWORD is configured
  if (gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // STARTTLS
        auth: { user: senderEmail, pass: gmailPass },
      });

      const info = await transporter.sendMail({
        from: `"${fromName}" <${senderEmail}>`,
        to,
        subject,
        html,
      });

      console.log(`[email-service] Email successfully sent via Gmail SMTP to ${to}. Message ID: ${info.messageId}`);
      return true;
    } catch (err) {
      console.error("[email-service] Gmail SMTP error:", err);
    }
  }

  return false;
}

/**
 * Sends event registration confirmation email to attendee.
 */
export async function sendRegistrationConfirmationEmail(
  toEmail: string,
  name: string,
  reference: string
): Promise<boolean> {
  const subject = "Thank you for registering — Revival Fire 2026";
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 12px;">
      <h2 style="color: #b45309; margin-bottom: 12px;">Thank you for registering with Revival Nation</h2>
      <p>Hi <strong>${escapeHtml(name)}</strong>,</p>
      <p>Thank you for registering for <strong>Revival Fire 2026</strong>. We are excited to welcome you and pray that this time will be a powerful moment of renewal in your life.</p>
      
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px 16px; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px; color: #92400e;">Registration Reference Number:</p>
        <p style="margin: 4px 0 0 0; font-size: 20px; font-weight: bold; color: #b45309;">${escapeHtml(reference)}</p>
      </div>

      <p>Please keep this reference handy for check-in at the venue.</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      
      <h3 style="margin-bottom: 0.5rem; color: #1f2937;">Event Details</h3>
      <ul style="list-style: none; padding-left: 0; margin: 0;">
        <li style="margin-bottom: 6px;"><strong>Date:</strong> Saturday, 15 August 2026</li>
        <li style="margin-bottom: 6px;"><strong>Time:</strong> 3:00 PM</li>
        <li style="margin-bottom: 6px;"><strong>Venue:</strong> RCCG Calvary Parish Car Park, Itire, Surulere, Lagos</li>
      </ul>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      
      <p>If you have any questions or prayer requests, feel free to reply to this email or contact us at <a href="mailto:revivalnation40@gmail.com" style="color: #d97706;">revivalnation40@gmail.com</a>.</p>
      <p style="margin-top: 1.5rem;">With love,<br /><strong>Revival Nation Ministry</strong></p>
    </div>
  `;

  return sendEmail({ to: toEmail, subject, html });
}

/**
 * Sends notification email to Revival Nation admin when a contact message is submitted.
 */
export async function sendContactAdminNotificationEmail(
  name: string,
  email: string,
  phone?: string,
  subject?: string,
  message?: string
): Promise<boolean> {
  const adminEmail = process.env.GMAIL_USER || process.env.EMAIL_FROM || "revivalnation40@gmail.com";
  const emailSubject = `[Contact Form] New Message from ${name}${subject ? `: ${subject}` : ""}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
      <h2 style="color: #b45309; margin-bottom: 16px;">New Contact Message Received</h2>
      <p>You have received a new message from the <strong>Revival Fire Website Contact Form</strong>.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; width: 30%; border-bottom: 1px solid #f3f4f6;">Full Name:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #f3f4f6;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Email:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${escapeHtml(email)}" style="color: #d97706;">${escapeHtml(email)}</a></td>
        </tr>
        ${phone ? `
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Phone:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #f3f4f6;">${escapeHtml(phone)}</td>
        </tr>` : ""}
        ${subject ? `
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Subject:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #f3f4f6;">${escapeHtml(subject)}</td>
        </tr>` : ""}
      </table>

      <h3 style="margin-bottom: 8px; color: #1f2937;">Message Content:</h3>
      <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(message || "")}</div>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <p style="font-size: 13px; color: #6b7280;">This notification was automatically sent by the Revival Fire Web Platform.</p>
    </div>
  `;

  return sendEmail({ to: adminEmail, subject: emailSubject, html });
}

/**
 * Sends auto-acknowledgment email to user who submitted contact message.
 */
export async function sendContactUserAcknowledgmentEmail(
  name: string,
  email: string,
  subject?: string,
  message?: string
): Promise<boolean> {
  const emailSubject = "We received your message — Revival Nation";
  
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
      <h2 style="color: #b45309; margin-bottom: 12px;">Thank you for contacting Revival Nation</h2>
      <p>Hi <strong>${escapeHtml(name)}</strong>,</p>
      <p>Thank you for reaching out to us. We have received your message and our team will get back to you as soon as possible.</p>
      
      ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}

      <h3 style="margin-top: 20px; margin-bottom: 8px; color: #1f2937;">Summary of your message:</h3>
      <div style="background-color: #f9fafb; padding: 14px; border-radius: 8px; border: 1px solid #e5e7eb; font-size: 14px; white-space: pre-wrap; color: #374151;">${escapeHtml(message || "")}</div>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <p>If you have urgent inquiries or prayer requests, feel free to reply directly to this email or write us at <a href="mailto:revivalnation40@gmail.com" style="color: #d97706;">revivalnation40@gmail.com</a>.</p>
      
      <p style="margin-top: 1.5rem;">Blessings,<br /><strong>Revival Nation Ministry Team</strong></p>
    </div>
  `;

  return sendEmail({ to: email, subject: emailSubject, html });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
