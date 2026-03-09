import "./Home.css";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import ServiceCard from "../components/ui/ServiceCard";
import {
  Building2,
  ShieldCheck,
  Wrench,
  HardHat,
  
} from "lucide-react";

const Home = () => {
  return (
    <main>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="container hero-inner">

          <div className="hero-content">
            <h1 className="hero-title">
              IngArq — Ingeniería y Arquitectura
            </h1>

            <p className="hero-sub">
              Ingeniería, arquitectura y gestión técnica para proyectos
              residenciales, comerciales e industriales.
            </p>

            <div className="hero-cta">
              <Button as={Link} to="/servicios">
                Ver servicios
              </Button>

              <Button variant="ghost" as={Link} to="/contacto">
                Contactanos
              </Button>
            </div>
          </div>

        </div>
      </section>


      {/* SOBRE INGARQ */}
      <section className="home-about">
        <div className="container">

          <h2>Un estudio al servicio de la construcción</h2>

          <p>
            IngArq es un estudio dedicado al desarrollo de soluciones técnicas
            en ingeniería y arquitectura, integrado por profesionales con
            trayectoria en distintos ámbitos de la construcción,
            la industria y el desarrollo inmobiliario.
          </p>

          <Link to="/sobre">
            <Button variant="ghost">Conocer más</Button>
          </Link>

        </div>
      </section>


      {/* SERVICIOS PRINCIPALES */}
      <section className="home-services">
        <div className="container">

          <h2>Servicios</h2>

          <div className="services-grid">

            <ServiceCard
              title="Ingeniería estructural"
              icon={Building2}
              text="Proyecto, cálculo y evaluación de estructuras de hormigón y metálicas."
            />

            <ServiceCard
              title="Arquitectura y construcción"
              icon={HardHat}
              text="Diseño, ampliaciones, reformas y desarrollo de obras."
            />

            <ServiceCard
              title="Instalaciones y redes"
              icon={Wrench}
              text="Gas, agua, cloacas, electricidad y tratamiento de efluentes."
            />

            <ServiceCard
              title="Seguridad e higiene"
              icon={ShieldCheck}
              text="Planes de evacuación, certificaciones y sistemas contra incendios."
            />

          </div>

          <div className="services-cta">
            <Link to="/servicios">
              <Button>Ver todos los servicios</Button>
            </Link>
          </div>

        </div>
      </section>


      {/* CTA FINAL */}
      <section className="home-cta">
        <div className="container">

          <h2>¿Tenés un proyecto en mente?</h2>

          <p>
            Podemos ayudarte a transformarlo en una solución técnica y
            constructiva.
          </p>

          <Link to="/contacto">
            <Button>Contactanos</Button>
          </Link>

        </div>
      </section>

    </main>
  );
};

export default Home;