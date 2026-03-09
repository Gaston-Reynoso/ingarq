import Card from "./Card";

const ProjectCard = ({ img, title }) => {
  return (
    <Card className="proj card">

        <div style={{ marginTop: '.6rem' }}>
        <strong>{title}</strong>
        
        <p className="muted" style={{ marginTop: 6 }}>
          Descripción breve del proyecto
        </p>
      </div>

      <img src={img} alt={title} className="img-cover" />
      
    </Card>
  );
};

export default ProjectCard;
