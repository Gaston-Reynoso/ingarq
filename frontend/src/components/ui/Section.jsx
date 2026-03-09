const Section = ({ id, title, children }) => {
  return (
    <section id={id}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
