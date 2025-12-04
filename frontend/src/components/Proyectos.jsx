import React from 'react';
import './Proyectos.css';


const demo = Array.from({length:6}).map((_,i)=>({id:i,title:`Proyecto ${i+1}`,img:`https://picsum.photos/seed/ingarq${i}/800/600`}))


const Proyectos = () => {
return (
<section id="proyectos" className="proyectos">
<div className="container">
<h2 className="section-title">Proyectos</h2>
<div className="grid">
{demo.map(p=> (
<div className="proj card" key={p.id}>
<img src={p.img} alt={p.title} className="img-cover"/>
<div style={{marginTop:'.6rem'}}>
<strong>{p.title}</strong>
<p className="muted" style={{marginTop:6}}>Descripción breve del proyecto</p>
</div>
</div>
))}
</div>
</div>
</section>
)
}

export default Proyectos;