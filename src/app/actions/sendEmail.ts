"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message"); // For Contact form

  // Equipment fields for Booking form
  const transmitters = formData.get("transmitters");
  const microphones = formData.get("microphones");
  const receivers = formData.get("receivers");
  const startDate = formData.get("startDate"); // For Booking form
  const returnDate = formData.get("returnDate"); // For Booking form
  const location = formData.get("location"); // For Booking form

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const isBooking =
    transmitters &&
    microphones &&
    receivers &&
    startDate &&
    returnDate &&
    location;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: isBooking
      ? `📅 New Booking Request from ${name} (Go Go Guide)`
      : `💬 New Contact Message from ${name} (Go Go Guide)`,
    text: isBooking
      ? `📋 BOOKING REQUEST
================
Name: ${name}
Email: ${email}
Phone: ${formData.get("phone") || "Not provided"}

📦 Equipment Details:
• Transmitters: ${transmitters}
• Microphones: ${microphones}
• Receivers: ${receivers}
• Start Date: ${startDate}
• Return Date: ${returnDate}
• Location: ${location}

💰 Additional Info: ${formData.get("additionalInfo") || "None provided"}

---
Submitted: ${new Date().toLocaleString()}`
      : `📧 CONTACT MESSAGE
================
Name: ${name}
Email: ${email}
Phone: ${formData.get("phone") || "Not provided"}

💬 Message:
${message}

---
Submitted: ${new Date().toLocaleString()}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
