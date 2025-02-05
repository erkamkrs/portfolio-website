import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;
  const attachmentFile = formData.get("attachment") as File | null;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Process the attachment correctly
  const attachments: Mail.Attachment[] = [];
  if (attachmentFile) {
    const buffer = Buffer.from(await attachmentFile.arrayBuffer()); // Convert File to Buffer
    attachments.push({
      filename: attachmentFile.name,
      content: buffer,
    });
  }

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    html: `
      <div><strong>Name:</strong> ${name}</div>
      <div><strong>Email:</strong> ${email}</div>
      <div><strong>Message:</strong> ${message}</div>
    `,
    attachments, // Add processed attachment
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
