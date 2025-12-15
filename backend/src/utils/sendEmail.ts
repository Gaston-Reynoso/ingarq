import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY!);




export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    console.log("📨 Enviando email a:", to);

    const msg = {
      to,
      from: process.env.FROM_EMAIL!, // MUY importante que esté verificado
      subject,
      html,
    };

    await sgMail.send(msg);

    console.log("📩 Email enviado (SendGrid OK)");
  } catch (error: any) {
    console.error("❌ Error SendGrid:", error.response?.body || error);
    throw error; // para que el controller lo detecte
  }
};