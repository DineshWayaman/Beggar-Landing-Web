import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { senderTemplate, adminTemplate } from '@/app/utils/emailTemplates';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send confirmation to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for Contacting Beggar Online',
      html: senderTemplate(name),
    });

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: adminTemplate(name, email, subject, message),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
