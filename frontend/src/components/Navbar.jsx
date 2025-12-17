import React, { useState, useEffect } from 'react';
import './Navbar.css';
import icon from '../assets/icon.png';

/* =========================
   Helper: scroll suave por ID
========================= */
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

/* =========================
   DropdownItem
========================= */
const DropdownItem = ({
  title,
  children,
  isOpen,
  setOpenDropdown,
  id,
  closeMenu
}) => {

  const toggleDropdown = () => {
    setOpenDropdown(isOpen ? null : id);
  };

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => window.innerWidth > 900 && setOpenDropdown(id)}
      onMouseLeave={() => window.innerWidth > 900 && setOpenDropdown(null)}
    >
      <button
        type="button"
        className={`dropdown-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {title}
        <svg className="dropdown-arrow" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        {children.map((child, index) => (
          <button
            key={index}
            type="button"
            className="dropdown-link"
            onClick={() => {
              scrollToId(child.target);
              setOpenDropdown(null);
              closeMenu();
            }}
          >
            {child.label}
          </button>
        ))}
      </div>
    </div>
  );
};

/* =========================
   Navbar
========================= */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  const serviciosDropdown = [
    { label: 'Construcción', target: 'servicios-construccion' },
    { label: 'Diseño', target: 'servicios-diseno' },
    { label: 'Consultoría', target: 'servicios-consultoria' },
  ];

  const proyectosDropdown = [
    { label: 'Residenciales', target: 'proyectos-residenciales' },
    { label: 'Comerciales', target: 'proyectos-comerciales' },
  ];

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">

        {/* ===== Brand ===== */}
        <div className="brand">
          <button
            className="brand-button"
            onClick={() => {
              scrollToId("hero");
              closeMenu();
            }}
          >
            <img src={icon} alt="IngArq" className="brand-icon" />
          </button>
        </div>

        {/* ===== Nav Links ===== */}
        <nav className={`nav-links ${open ? 'open' : ''}`}>

          <button
            className="btn-hero"
            onClick={() => {
              scrollToId("hero");
              closeMenu();
            }}
          >
            Inicio
          </button>

          <DropdownItem
            id="servicios"
            title="Servicios"
            children={serviciosDropdown}
            isOpen={openDropdown === 'servicios'}
            setOpenDropdown={setOpenDropdown}
            closeMenu={closeMenu}
          />

          <button
            className="nav-link"
            onClick={() => {
              scrollToId("sobre");
              closeMenu();
            }}
          >
            Sobre
          </button>

          <DropdownItem
            id="proyectos"
            title="Proyectos"
            children={proyectosDropdown}
            isOpen={openDropdown === 'proyectos'}
            setOpenDropdown={setOpenDropdown}
            closeMenu={closeMenu}
          />

          <button
            className="cta"
            onClick={() => {
              scrollToId("contacto");
              closeMenu();
            }}
          >
            Contacto
          </button>

        </nav>

        {/* ===== Mobile Toggle ===== */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={open ? 'top-open' : 'top-close'} />
          <span className={open ? 'middle-open' : 'middle-close'} />
          <span className={open ? 'bottom-open' : 'bottom-close'} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;
