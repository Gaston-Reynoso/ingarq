import React from 'react';
import './Sobre.css';


const Sobre = () => {
return (
<section id="sobre" className="sobre">
<div className="container sobre-inner">
<div className="sobre-text card">
<h2 className="section-title">Sobre IngArq</h2>
<p className="muted">Somos un equipo multidisciplinario de ingenieros y arquitectos dedicados a transformar ideas en proyectos reales. Combinamos técnica, diseño y herramientas modernas para entregar soluciones eficientes y sustentables.</p>
<ul>
<li>Experiencia en proyectos residenciales y comerciales.</li>
<li>Enfoque colaborativo con el cliente.</li>
<li>Compromiso con la sustentabilidad.</li>
</ul>
</div>
<div className="sobre-stats">
<div className="stat card"><h3>120+</h3><p className="muted">Proyectos</p></div>
<div className="stat card"><h3>15</h3><p className="muted">Años de experiencia combinada</p></div>
<div className="stat card"><h3>98%</h3><p className="muted">Satisfacción cliente</p></div>
</div>
</div>
</section>
)
}

export default Sobre;