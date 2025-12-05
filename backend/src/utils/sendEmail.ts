import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY!);



export const sendEmail = async (to: string, subject: string, html: string) => {
  const msg = {
    to,
    from: process.env.FROM_EMAIL!,
    subject,
    html
  };

  await sgMail.send(msg);
};
