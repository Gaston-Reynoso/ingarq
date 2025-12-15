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



    // Email de confirmación al cliente
    await sendEmail(
      parsed.email,
      "Hemos recibido tu mensaje — IngArq",
      `
      <h3>Hola ${parsed.name}, ¡gracias por contactarte!</h3>
      <p>En breve un profesional de IngArq te responderá.</p>
      `
    );

        // Email al admin
    await sendEmail(
      process.env.ADMIN_EMAIL!,
      "Nuevo contacto desde IngArq",
      `
      <h2>Nuevo mensaje</h2>
      <p><strong>Nombre:</strong> ${parsed.name}</p>
      <p><strong>Email:</strong> ${parsed.email}</p>
      <p><strong>Mensaje:</strong> ${parsed.message}</p>
      <hr />
      <p>Fecha: ${new Date().toLocaleString()}</p>
      `
    );

    res.json({ ok: true, saved });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ ok: false, error: error?.message ?? "Error desconocido" });

  }
};
