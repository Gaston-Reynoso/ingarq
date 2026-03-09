import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import "./Servicios.css";
import {
  Building2,
  ShieldCheck,
  Wrench,
  FileCheck,
  HardHat,
  Network,
  Cog
} from "lucide-react";


const servicios = [
  {
    title: "Ingeniería Estructural",
    icon: Building2,
    items: [
      "Informes técnicos",
      "Asesoramiento estructural",
      "Proyecto y cálculo",
      "Estructuras de hormigón armado y pretensado",
      "Estructuras metálicas",
      "Fundaciones y pilotajes",
      "Patologías estructurales y auditorías"
    ]
  },
  {
    title: "Seguridad e Higiene",
    icon: ShieldCheck,
    items: [
      "Certificados y aprobaciones",
      "Proyectos de seguridad",
      "Sistemas contra incendios",
      "Planes de evacuación",
      "Manual de protección"
    ]
  },
  {
    title: "Instalaciones y Redes",
    icon: Wrench,
    items: [
      "Gas residencial e industrial",
      "Conexiones cloacales",
      "Distribución de agua",
      "Sistemas de riego",
      "Instalaciones eléctricas",
      "Tratamiento de efluentes",
      "Informes ambientales"
    ]
  },
  {
    title: "Habilitaciones Comerciales",
    icon: FileCheck,
    items: [
      "Gestión técnica de habilitaciones",
      "Requerimientos municipales",
      "Aprobaciones y trámites",
      "Informes técnicos",
      "Prefactibilidad de actividades"
    ]
  },
  {
    title: "Arquitectura y Construcción",
    icon: HardHat,
    items: [
      "Proyectos de construcción",
      "Ampliaciones",
      "Reformas",
      "Construcción con hormigón armado",
      "Estructuras metálicas",
      "Entrepisos y techos"
    ]
  },
  {
    title: "Infraestructura para Loteos",
    icon: Network,
    items: [
      "Redes de agua potable",
      "Sistemas cloacales",
      "Alumbrado público",
      "Redes de energía eléctrica",
      "Proyecto, cálculo y aprobaciones"
    ]
  },
  {
    title: "Ingeniería Electromecánica",
    icon: Cog,
    items: [
      "Sistemas automáticos de bombeo",
      "Bombeo de agua potable",
      "Bombeo de desagües",
      "Sistemas de riego automatizado"
    ]
  }
];

const Servicios = () => {
  return (
    <section id="servicios">
      <div className="container">

        <Section
          title="Servicios"
          subtitle="Soluciones integrales en ingeniería, arquitectura e infraestructura"
        />

   <div className="servicios-grid">
  {servicios.map((s, i) => {
    const Icon = s.icon;

    return (
      <div key={i} className="servicio">

        <div className="icon-placeholder">
          <Icon size={24} />
        </div>

        <h3>{s.title}</h3>

        <ul className="servicio-lista">
          {s.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <a href="/contacto" className="btn-servicio">
          Consultar servicio
        </a>

      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default Servicios;