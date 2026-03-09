import './Proyectos.css';
import Section from '@/components/ui/Section';
import ProjectCard from '@/components/ui/ProyectCard';

const demo = Array.from({ length: 6 }).map((imp_, i) => ({
  id: i,
  title: `Proyecto ${i + 1}`,
  img: `https://picsum.photos/seed/ingarq${i}/800/600`,
}));

const Proyectos = () => {
  return (
    <Section id="proyectos" title="Proyectos">
      <div className="grid">
        {demo.map(p => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </Section>
  );
};

export default Proyectos;
