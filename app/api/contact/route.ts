import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { toast } from "react-toastify";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    html: `
    <div><strong>Name:</strong> ${name}</div>
    <br/>
    <div><strong>Email:</strong> ${email}</div>
    <br/>
    <div><strong>Message:</strong> ${message}</div>
    <br/>
    <p>Sent from:
      ${email}</p>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ toast: toast.success('Email sent') });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}