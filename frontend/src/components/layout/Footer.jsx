import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-left">
          <div className="logo">
            Ing<span>Arq</span>
          </div>
          <p className="muted">Diseño e ingeniería con propósito.</p>
        </div>

        <div className="footer-right">
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            {/* <Link to="/proyectos">Proyectos</Link> */}
            <Link to="/contacto">Contacto</Link>

            <a
              href={`https://wa.me/5493512723889?text=${encodeURIComponent('Hola! Quiero más info sobre IngArq')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
