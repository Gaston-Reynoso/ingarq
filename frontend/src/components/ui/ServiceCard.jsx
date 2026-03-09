import Card from "./Card";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <Card className="service-card">
      <div className="service-icon">
        <Icon size={32} />
      </div>

      <h3>{title}</h3>

      <p className="muted">
        {description}
      </p>
    </Card>
  );
};

export default ServiceCard;
