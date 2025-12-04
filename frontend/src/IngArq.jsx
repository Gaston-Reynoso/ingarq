import React from 'react';
import './IngArq.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Sobre from './components/Sobre';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


const IngArq = () => {
return (
<div className="ingarq-root">
<Navbar />
<main>
<Hero />
<Servicios />
<Sobre />
<Proyectos />
<Contacto />
</main>
<Footer />

{/*<div class="whatsapp-fab" role="button" tabindex="0" aria-label="¿Tienes alguna pregunta? Contactar por WhatsApp">
									<div class="joinchat__tooltip" aria-hidden="true"><div>¿Tienes alguna pregunta?</div></div> rel="noopener noreferrer"
			</div>*/}
{/* WhatsApp flotante */}

<a
className="whatsapp-fab"
target="_blank"
rel="noopener noreferrer"
href={`https://wa.me/5493512723889?text=${encodeURIComponent('Hola! Quiero más info sobre IngArq')}`}
role="button"  
aria-label="Contactar por WhatsApp"
> 
<span className="tooltip-text">Contactar por WhatsApp</span>
<svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden>
<path fill="#fff" d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 .02 4.83.02 11.08c0 1.95.51 3.86 1.48 5.56L0 24l7.61-1.98a11.02 11.02 0 004.39.94c6.63 0 11.98-4.83 11.98-11.08 0-2.96-1.1-5.73-3-7.4z"/>
<path fill="#25D366" d="M12 2c4.97 0 9 3.92 9 8.75 0 4.19-3.21 7.41-7.9 7.41-.83 0-1.64-.1-2.42-.3L8 19l-1.5-.4A8.83 8.83 0 012.9 10.75C2.9 6.92 7 2 12 2z" opacity="0.0"/>
<path fill="#fff" d="M17.6 14.1c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15s-.8 1-.98 1.2c-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.8-1.68-2.1-.18-.3 0-.46.13-.6.12-.12.3-.3.45-.45.15-.15.2-.26.3-.43.1-.18 0-.33-.05-.45-.05-.12-.7-1.7-.95-2.33-.25-.6-.5-.5-.7-.5h-.63c-.18 0-.45.06-.68.33-.23.28-.88.86-.88 2.1s.9 2.44 1.03 2.6c.12.15 1.77 2.7 4.3 3.78 3.03 1.3 3.03 0 3.58-.02.56-.03 1.82-.74 2.08-1.46.25-.72.25-1.34.18-1.46-.06-.12-.27-.18-.57-.33z"/>
</svg>
</a> 

</div>
);
}

export default IngArq;

