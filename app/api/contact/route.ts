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

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const mailConfig: MailConfig = {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport(mailConfig as TransportOptions);

    try {
      // Verify SMTP connection configuration
      await transporter.verify();
    } catch (error) {
      console.error('SMTP Connection Error:', error);
      return NextResponse.json(
        { error: 'Failed to connect to email server' },
        { status: 500 }
      );
    }

    try {
      // Send confirmation to sender
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thanks for Contacting Beggar Online',
        html: senderTemplate(name),
      });
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    try {
      // Send notification to admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Contact Form: ${subject}`,
        html: adminTemplate(name, email, subject, message),
      });
    } catch (error) {
      console.error('Failed to send admin notification:', error);
      return NextResponse.json(
        { error: 'Failed to send admin notification' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
