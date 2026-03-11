import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {

    console.log("📨 Enviando email a:", to);

    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to,
      subject,
      html
    });

    console.log("📩 Email enviado (Resend OK)", response);

  } catch (error: any) {

    console.error("❌ Error Resend:", error);

    throw error;
  }
};