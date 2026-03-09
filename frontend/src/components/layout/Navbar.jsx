import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Navbar.css";
import icon from "../../assets/icon.png";

/* =========================
   DropdownItem
========================= */
const DropdownItem = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => window.innerWidth > 900 && setOpen(true)}
      onMouseLeave={() => window.innerWidth > 900 && setOpen(false)}
    >
      <button
        className={`dropdown-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(v => !v)}
        type="button"
      >
        {title}
        <svg className="dropdown-arrow" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      <div className={`dropdown-menu ${open ? "open" : ""}`}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className="dropdown-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

/* =========================
   Navbar
   const Navbar = () => { 
    const [scrolled, setScrolled] = useState(false); 
    const [openMenu, setOpenMenu] = useState(false); 
    useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
     }, []); 
     
     return ( <header className={nav ${scrolled ? "nav--scrolled" : ""}}>
========================= */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      if (currentScroll > lastScroll && currentScroll > 120) {
        // Bajando
        setHidden(true);
      } else {
        // Subiendo
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`nav 
        ${scrolled ? "nav--scrolled" : ""} 
        ${hidden ? "nav--hidden" : ""}`}
    >
      <div className="container nav-inner">

        {/* ===== Brand ===== */}
        <Link to="/" className="brand" onClick={() => setOpenMenu(false)}>
          <img src={icon} alt="IngArq" className="brand-icon" />
        </Link>

        {/* ===== Links ===== */}
        <nav className={`nav-links ${openMenu ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpenMenu(false)}>
            Inicio
          </NavLink>

          {/*<DropdownItem
            title="Servicios"
            links={[
              { label: "Construcción", to: "/servicios" },
              { label: "Diseño", to: "/servicios" },
              { label: "Consultoría", to: "/servicios" },
            ]}
          />*/}

           <NavLink to="/servicios" onClick={() => setOpenMenu(false)}>
            Servicios
          </NavLink>

          <NavLink to="/sobre" onClick={() => setOpenMenu(false)}>
            Sobre
          </NavLink>

         {/* <DropdownItem
            title="Proyectos"
            links={[
              { label: "Residenciales", to: "/proyectos" },
              { label: "Comerciales", to: "/proyectos" },
            ]}
          />*/ }

          <NavLink
            to="/contacto"
            className="cta"
            onClick={() => setOpenMenu(false)}
          >
            Contacto
          </NavLink>
        </nav>

        {/* ===== Mobile Toggle ===== */}
        <button
          className="nav-toggle"
          onClick={() => setOpenMenu(v => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
