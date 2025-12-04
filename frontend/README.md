Estructura:
src/
 ├── components/
 │     ├── Hero.jsx
 │     ├── Hero.css
 │     ├── Servicios.jsx
 │     ├── Servicios.css
 │     ├── Sobre.jsx
 │     ├── Sobre.css
 │     ├── Proyectos.jsx
 │     ├── Proyectos.css
 │     ├── Contacto.jsx
 │     ├── Contacto.css
 │     ├── Footer.jsx
 │     ├── Footer.css
 │     ├── Navbar.jsx
 │     ├── Navbar.css
 ├── IngArq.jsx
 └── IngArq.css (solo estilos globales, reset, variables, etc.)

 📘 README — Backend IngArq (Node + Express + TypeScript + MongoDB + SendGrid)
🚀 Descripción

Este backend provee la API para la página web IngArq, permitiendo:

Recibir mensajes desde el formulario de contacto del frontend.

Guardarlos en una base de datos MongoDB.

Enviar notificaciones por email usando SendGrid al administrador y al usuario.

Tecnologías:

Node.js + Express

TypeScript

MongoDB (Mongoose)

SendGrid

Zod para validación

Dotenv

