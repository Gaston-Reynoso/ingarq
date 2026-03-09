import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import "./Sobre.css";


const areas = [
  "Ingeniería estructural",
  "Arquitectura y construcción",
  "Instalaciones y redes de servicios",
  "Seguridad e higiene",
  "Infraestructura para loteos",
  "Ingeniería electromecánica"
];

const proceso = [
  {
    title: "Análisis del proyecto",
    desc: "Evaluación técnica inicial de las necesidades del cliente y del alcance del proyecto."
  },
  {
    title: "Desarrollo técnico",
    desc: "Elaboración de soluciones de ingeniería y arquitectura adaptadas a cada caso."
  },
  {
    title: "Gestión y ejecución",
    desc: "Coordinación técnica, gestión de habilitaciones y desarrollo de obra."
  },
  {
    title: "Entrega y seguimiento",
    desc: "Finalización del proyecto asegurando calidad técnica y cumplimiento de objetivos."
  }
];

const Sobre = () => {
  return (
    <section id="sobre">

      <div className="container">

        {/* INTRO */}
        <Section
          title="Sobre IngArq"
          subtitle="Ingeniería y arquitectura al servicio de la construcción"
        />

        {/* BLOQUE PRINCIPAL */}
        <div className="sobre-inner">

          {/* TEXTO */}
          <Card className="sobre-text">

            <p className="muted">
              IngArq es un estudio especializado en ingeniería, arquitectura
              y áreas complementarias de la construcción, integrado por un
              equipo de profesionales con amplia trayectoria técnica en el
              desarrollo de proyectos.
            </p>

            <p className="muted">
              Trabajamos junto a empresas, instituciones y clientes
              particulares brindando asesoramiento técnico y soluciones
              profesionales para proyectos residenciales, comerciales,
              industriales e institucionales.
            </p>

            <ul>
              <li>Equipo técnico con experiencia en ingeniería y arquitectura.</li>
              <li>Soluciones adaptadas a cada proyecto.</li>
              <li>Compromiso con la calidad, los plazos y la responsabilidad profesional.</li>
            </ul>

          </Card>

          {/* STATS */}
          <div className="column stats">

            <Card className="stat">
              <h3>Proyectos</h3>
              <p className="muted">
                Desarrollo de proyectos residenciales, comerciales,
                industriales e institucionales.
              </p>
            </Card>

            <Card className="stat">
              <h3>Experiencia técnica</h3>
              <p className="muted">
                Profesionales con trayectoria en ingeniería,
                arquitectura y gestión de obras.
              </p>
            </Card>

            <Card className="stat">
              <h3>Compromiso</h3>
              <p className="muted">
                Trabajo con responsabilidad, seriedad
                y orientación a la calidad del servicio.
              </p>
            </Card>

          </div>

        </div>

        {/* AREAS */}
        <div className="areas">

          <Section
            title="Áreas de trabajo"
            subtitle="Servicios técnicos para el desarrollo integral de proyectos"
          />

          <div className="areas-grid">
            {areas.map((area, i) => (
              <Card key={i} className="area">
                {area}
              </Card>
            ))}
          </div>

        </div>

        {/* PROCESO */}
        <div className="proceso">

          <Section
            title="Nuestra forma de trabajo"
            subtitle="Un proceso técnico claro para cada proyecto"
          />

          <div className="proceso-grid">
            {proceso.map((p, i) => (
              <Card key={i}>
                <h3>{p.title}</h3>
                <p className="muted">{p.desc}</p>
              </Card>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="cta-sobre">

          <Card className="cta-card">

            <h2>¿Tenés un proyecto en mente?</h2>

            <p className="muted">
              Nuestro equipo puede asesorarte y ayudarte a transformar
              tu idea en un proyecto concreto.
            </p>

            <Button as={Link} to="/contacto">
              Contactar con IngArq
            </Button>

          </Card>

        </div>

      </div>
    </section>
  );
};

export default Sobre;