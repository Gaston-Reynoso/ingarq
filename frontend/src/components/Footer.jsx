import React from 'react';
import './Footer.css';


const Footer = () => {
return (
<footer className="footer">
<div className="container footer-inner">
<div className="footer-left">
<div className="logo">Ing<span>Arq</span></div>
<p className="muted">Diseño e ingeniería con propósito.</p>
</div>
<div className="footer-right">
<nav>
<a href="#hero">Inicio</a>
<a href="#servicios">Servicios</a>
<a href="#proyectos">Proyectos</a>
<a href="#contacto">Contacto</a>
<a href={`https://wa.me/YOUR_WHATSAPP_NUMBER`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
</nav>
</div>
</div>
</footer>
)
}

export default Footer;