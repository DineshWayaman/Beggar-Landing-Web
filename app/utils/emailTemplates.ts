export const senderTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #f59e0b, #d97706); padding: 20px; border-radius: 10px; text-align: center; color: white; }
    .content { background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 20px; }
    .footer { text-align: center; margin-top: 20px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thanks for Contacting Us!</h1>
    </div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to Beggar Online. We've received your message and will get back to you shortly.</p>
      <p>In the meantime, feel free to check out our game!</p>
      <p>Best regards,<br>The Beggar Online Team</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Beggar Online. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export const adminTemplate = (name: string, email: string, subject: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #f59e0b, #d97706); padding: 20px; border-radius: 10px; text-align: center; color: white; }
    .content { background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; }
    .message { background: white; padding: 15px; border-radius: 5px; margin-top: 10px; }
    .footer { text-align: center; margin-top: 20px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From:</div>
        <div>${name} (${email})</div>
      </div>
      <div class="field">
        <div class="label">Subject:</div>
        <div>${subject}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="message">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Beggar Online. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
