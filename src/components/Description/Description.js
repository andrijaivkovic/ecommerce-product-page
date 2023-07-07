const Description = ({ name, maker, description }) => {
  return (
    <div className="description">
      <h3 className="description__product-maker">{maker}</h3>
      <h2 className="description__product-name">{name}</h2>
      <p className="description__product-description">{description}</p>
    </div>
  );
};

export default Description;
