import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Configure your transporter (use environment variables in production)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.snc.co.zw",
      port: 465, // Explicitly use 465 for SSL
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // e.g., sales@snc.co.zw
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Keeps the connection from failing if the server's SSL certificate 
        // isn't fully verified by the client-side library
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const receiverEmail = process.env.QUOTE_RECEIVER_EMAIL || 'info@snc.co.zw';

    // Generate HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { background: #1a1a1a; color: #ffffff; padding: 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 300; }
          .section { padding: 20px; border-bottom: 1px solid #eeeeee; }
          .section:last-child { border-bottom: none; }
          .section-title { font-size: 16px; font-weight: bold; color: #555; text-transform: uppercase; margin-bottom: 15px; border-left: 4px solid #0070f3; padding-left: 10px; }
          .row { display: flex; margin-bottom: 10px; }
          .label { width: 140px; font-weight: bold; color: #666; font-size: 14px; }
          .value { flex: 1; color: #333; font-size: 14px; }
          .footer { background: #f9f9f9; text-align: center; padding: 15px; font-size: 12px; color: #888; }
          @media (max-width: 600px) {
            .container { width: 100%; margin: 0; border-radius: 0; }
            .row { flex-direction: column; }
            .label { margin-bottom: 4px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Quote Request</h1>
            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.8;">${data.projectType} Project - ${data.projectCategory}</p>
          </div>

          <div class="section">
            <div class="section-title">Client Information</div>
            <div class="row"><div class="label">Full Name:</div><div class="value">${data.fullName || 'N/A'}</div></div>
            <div class="row"><div class="label">Client Type:</div><div class="value" style="text-transform: capitalize;">${data.clientType || 'N/A'}</div></div>
            ${data.companyName ? `<div class="row"><div class="label">Company:</div><div class="value">${data.companyName}</div></div>` : ''}
            <div class="row"><div class="label">Email:</div><div class="value"><a href="mailto:${data.email}" style="color: #0070f3; text-decoration: none;">${data.email || 'N/A'}</a></div></div>
            <div class="row"><div class="label">Phone:</div><div class="value">${data.phone || 'N/A'}</div></div>
            ${data.alternatePhone ? `<div class="row"><div class="label">Alt Phone:</div><div class="value">${data.alternatePhone}</div></div>` : ''}
            <div class="row"><div class="label">Preferred Contact:</div><div class="value" style="text-transform: capitalize;">${data.preferredContact || 'N/A'}</div></div>
          </div>

          <div class="section">
            <div class="section-title">Project Details</div>
            <div class="row"><div class="label">Project Name:</div><div class="value">${data.projectName || 'N/A'}</div></div>
            <div class="row"><div class="label">Description:</div><div class="value">${data.projectDescription || 'N/A'}</div></div>
            <div class="row"><div class="label">Scope:</div><div class="value">${data.projectScope || 'N/A'}</div></div>
            <div class="row"><div class="label">Location:</div><div class="value">${data.location || 'N/A'}</div></div>
            <div class="row"><div class="label">Site Address:</div><div class="value">${data.siteAddress || 'N/A'}</div></div>
            <div class="row"><div class="label">Estimated Budget:</div><div class="value" style="font-weight: bold; color: #2e7d32;">${data.estimatedBudget || 'N/A'}</div></div>
          </div>

          <div class="section">
            <div class="section-title">Timeline & Requirements</div>
            <div class="row"><div class="label">Start Date:</div><div class="value">${data.preferredStartDate || 'N/A'}</div></div>
            <div class="row"><div class="label">Expected Duration:</div><div class="value">${data.expectedDuration || 'N/A'}</div></div>
            <div class="row"><div class="label">Urgency:</div><div class="value" style="text-transform: capitalize;">${data.urgency || 'N/A'}</div></div>
            <div class="row"><div class="label">Site Visit:</div><div class="value">${data.requiresSiteVisit ? `Yes - ${data.siteVisitDate || 'TBD'} ${data.siteVisitTime || ''}` : 'No'}</div></div>
            ${data.specialRequirements ? `<div class="row"><div class="label">Special Req:</div><div class="value">${data.specialRequirements}</div></div>` : ''}
          </div>

          ${data.additionalServices && data.additionalServices.length > 0 ? `
          <div class="section">
            <div class="section-title">Additional Services</div>
            <div class="value">
              ${data.additionalServices.map((service: string) => `<span style="display:inline-block; background:#eff6ff; color:#1e40af; padding:4px 8px; border-radius:4px; font-size:12px; margin-right:5px; margin-bottom:5px;">${service}</span>`).join('')}
            </div>
          </div>
          ` : ''}

          <div class="footer">
            <p>Sent from SNC Website Quote Form</p>
            <p style="margin:0;">${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Compose email
    const mailOptions = {
      from: `"SNC Website" <${process.env.SMTP_USER}>`,
      to: 'sales@snc.co.zw', // Main recipient
      cc: 'info@snc.co.zw',  // Carbon Copy
      replyTo: data?.email || undefined,
      subject: `New Quote Request: ${data.projectName || 'Undefined Project'} (${data.fullName || 'Unknown Client'})`,
      text: `
New Quote Request

CLIENT INFORMATION
Name: ${data.fullName || 'N/A'}
Email: ${data.email || 'N/A'}
Phone: ${data.phone || 'N/A'}

PROJECT DETAILS
Project: ${data.projectName || 'N/A'}
Type: ${data.projectType || 'N/A'}
Budget: ${data.estimatedBudget || 'N/A'}

DESCRIPTION
${data.projectDescription || 'N/A'}

Please view the HTML email for full details.
      `,
      html: htmlContent
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: `Failed to send email. ${error}` }, { status: 500 });
  }
}
