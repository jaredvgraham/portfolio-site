import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please fill out all fields" },
      { status: 400 }
    );
  }

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `A contact from portfoilio: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Message sent" });
  } catch (error) {
    return NextResponse.json(
      { message: "Message failed to send" },
      { status: 500 }
    );
  }
}
