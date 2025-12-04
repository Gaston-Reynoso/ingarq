import React from 'react';
import './Servicios.css';


const servicios = [
{title:'Proyecto Arquitectónico', desc:'Diseño integral de viviendas, comercios y espacios corporativos con foco en funcionalidad y estética.'},
{title:'Dirección de Obra', desc:'Seguimiento técnico y coordinación de proveedores para ejecución según proyecto.'},
{title:'Estructuras e Ingeniería', desc:'Cálculos y diseño estructural, estudios de suelo y optimización de materiales.'},
{title:'Interiorismo y Ambientación', desc:'Soluciones a medida para maximizar espacio y confort.'},
]


const Servicios = () => {
return (
<section id="servicios" className="servicios">
<div className="container">
<h2 className="section-title">Servicios</h2>
<div className="servicios-grid">
{servicios.map((s,i)=> (
<article className="servicio card" key={i}>
<div className="icon-placeholder">{s.title.split(' ').slice(0,2).map(w=>w[0]).join('')}</div>
<h3>{s.title}</h3>
<p className="muted">{s.desc}</p>
</article>
))}
</div>
</div>
</section>
)
}

export default Servicios;