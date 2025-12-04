import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY ? "OK" : "NO DEFINIDA");
console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY);
console.log(" empieza con SG?:", process.env.SENDGRID_API_KEY?.startsWith("SG."));


export const sendEmail = async (to: string, subject: string, html: string) => {
  const msg = {
    to,
    from: process.env.FROM_EMAIL!,
    subject,
    html
  };

  await sgMail.send(msg);
};
