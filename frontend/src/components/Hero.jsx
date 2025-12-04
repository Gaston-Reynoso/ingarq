import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero.jpg'; // placeholder - reemplaza con tu imagen


const Hero = () => {
return (
<section id="hero" className="hero">
    
<div className="container hero-inner">
   
<div className="hero-left">
    
<h1 className="hero-title">IngArq — Ingeniería y Arquitectura</h1>
<p className="hero-sub">Diseñamos soluciones inteligentes, sustentables y estéticas para tus obras y proyectos.</p>
<div className="hero-cta">
    <button className="btn"><a href="#proyectos"  style={{textDecoration:'none', cursor: 'pointer'}}>Ver proyectos</a></button>
    <button className="btn"><a href="#contacto"  style={{textDecoration:'none'}}>Contactanos</a></button>
 {/* , background:'transparent',border:'2px solid rgba(255,255,255,0.08)' */}
</div>
</div>
{/*<div className="hero-right">
<div className="hero-card card">
<img src={heroImg} alt="Hero" className="img-cover"/>
</div>
</div>*/}
</div>
</section>
);
}

export default Hero;