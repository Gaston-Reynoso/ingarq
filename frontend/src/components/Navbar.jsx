import React, {useState, useEffect} from 'react';
import './Navbar.css';


const Navbar = () => {
const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);


useEffect(()=>{
const onScroll = () => setScrolled(window.scrollY > 20);
window.addEventListener('scroll', onScroll);
return ()=> window.removeEventListener('scroll', onScroll);
},[]);


return (
<header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
<div className="container nav-inner">
<div className="brand">
<div className="logo">Ing<span>Arq</span></div>
</div>


<nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
<a href="#hero" onClick={()=>setOpen(false)}>Inicio</a>
<a href="#servicios" onClick={()=>setOpen(false)}>Servicios</a>
<a href="#sobre" onClick={()=>setOpen(false)}>Sobre</a>
<a href="#proyectos" onClick={()=>setOpen(false)}>Proyectos</a>
<a href="#contacto" className="cta" onClick={()=>setOpen(false)}>Contacto</a>
</nav>


<button className="nav-toggle" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
<span/>
<span/>
<span/>
</button>
</div>
</header>
)
}

export default Navbar;