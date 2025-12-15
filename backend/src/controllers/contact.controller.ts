import { Request, Response } from "express";
import Contact from "../models/Contact";
import { sendEmail } from "../utils/sendEmail";
import { z } from "zod";

const ContactSchemaValidator = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5)
});

export const handleContact = async (req: Request, res: Response) => {
  try {
    const parsed = ContactSchemaValidator.parse(req.body);

    // Guardar en Mongo
    const saved = await Contact.create(parsed);

    const clientEmailHTML = (name: string) => `
    <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:30px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; padding:30px; border-radius:8px;">
    
    <img src="https://ingarq.com.ar/logo.png" alt="IngArq" style="max-width:160px; margin-bottom:20px;" />

    <h2 style="color:#222;">Hola ${name},</h2>

    <p>Gracias por contactarte con <strong>IngArq</strong>.</p>

    <p>Ya recibimos tu mensaje y en breve un profesional de nuestro equipo se pondrá en contacto con vos.</p>

    <hr style="margin:30px 0;" />

    <p style="font-size:14px; color:#777;">
      📍 IngArq Construcciones<br/>
      ✉️ contacto@ingarq.com.ar<br/>
      🌐 www.ingarq.com.ar
    </p>

  </div>
</div>
`;

const adminEmailHTML = (data: {
  name: string;
  email: string;
  message: string;
}) => `
<div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:30px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; padding:30px; border-radius:8px;">
    
    <h2 style="color:#b91c1c;">📬 Nuevo contacto desde la web</h2>

    <p><strong>Nombre:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Mensaje:</strong></p>

    <blockquote style="background:#f9f9f9; padding:15px; border-left:4px solid #b91c1c;">
      ${data.message}
    </blockquote>

    <hr />

    <p style="font-size:13px; color:#777;">
      Fecha: ${new Date().toLocaleString()}
    </p>

  </div>
</div>
`;




    // Email de confirmación al cliente
   await sendEmail(
  parsed.email,
  "Hemos recibido tu mensaje — IngArq",
  clientEmailHTML(parsed.name)
  );

        // Email al admin
   await sendEmail(
   process.env.ADMIN_EMAIL!,
   "Nuevo contacto desde IngArq",
   adminEmailHTML(parsed)
  );

    res.json({ ok: true, saved });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ ok: false, error: error?.message ?? "Error desconocido" });

  }
};
