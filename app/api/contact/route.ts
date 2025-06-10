import { NextResponse } from 'next/server';
import nodemailer, { TransportOptions } from 'nodemailer';
import { senderTemplate, adminTemplate } from '@/app/utils/emailTemplates';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface MailConfig {
  service: string;
  auth: {
    user: string | undefined;
    pass: string | undefined;
  };
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message }: ContactFormData = await request.json();

    const mailConfig: MailConfig = {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport(mailConfig as TransportOptions);

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
