import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Configure your transporter (use environment variables in production)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
       tls: {
    rejectUnauthorized: false, // ✅ bypass self-signed chain
  },
    });

    // Compose email
    const mailOptions = {
      from: `SNC Website <${process.env.SMTP_USER}>`,
      to: process.env.QUOTE_RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: 'New Quote Request from SNC Website',
      text: JSON.stringify(data, null, 2),
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: `Failed to send email. ${error}` }, { status: 500 });
  }
}
