"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("companyName") as string; // Optional B2B field
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "Not provided";
  const message = formData.get("message");

  const transmitters = formData.get("transmitters");
  const microphones = formData.get("microphones");
  const receivers = formData.get("receivers");
  const startDate = formData.get("startDate");
  const returnDate = formData.get("returnDate");
  const location = formData.get("location");

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL;

  if (!emailUser || !emailPass || !receiverEmail) {
    console.error("Email configuration missing.");
    return { success: false };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: emailUser, pass: emailPass },
  });

  const isBooking = !!(transmitters && microphones && receivers);
  const displayName = company ? `${company} | ${name}` : name;

  // PROFESSIONAL HTML TEMPLATE
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
      <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
        ${isBooking ? "📅 New Booking Request" : "📧 New Contact Message"}
      </h2>
      <p>You have received a new inquiry from the <strong>GoGoGuide</strong> website.</p>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${name}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${company || "Individual"}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
        ${
          isBooking
            ? `
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Location:</td><td style="padding: 8px;">${location}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Dates:</td><td style="padding: 8px;">${startDate} to ${returnDate}</td></tr>
        `
            : ""
        }
      </table>

      ${
        isBooking
          ? `
        <h3 style="margin-top: 20px; color: #555;">📦 Equipment Requested</h3>
        <ul style="list-style: none; padding: 0;">
          <li>✅ <strong>Transmitters:</strong> ${transmitters}</li>
          <li>✅ <strong>Microphones:</strong> ${microphones}</li>
          <li>✅ <strong>Receivers:</strong> ${receivers}</li>
        </ul>
      `
          : `
        <h3 style="margin-top: 20px; color: #555;">💬 Message</h3>
        <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
          ${message}
        </div>
      `
      }
      
      <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
        Submitted on: ${new Date().toLocaleString()}
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"${displayName}" <${emailUser}>`,
    to: receiverEmail,
    replyTo: email,
    subject: isBooking
      ? `📅 Booking: ${displayName}`
      : `💬 Message: ${displayName}`,
    html: htmlContent, // Using the HTML property instead of text
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false };
  }
}
