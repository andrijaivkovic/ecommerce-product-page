const Price = ({ price, isDiscounted, discountPercentage }) => {
  const currentPrice = isDiscounted
    ? price - price * (discountPercentage / 100)
    : price;

  return (
    <div className="price">
      <div className="price__left">
        <p className="price__current">${currentPrice}</p>
        {isDiscounted && (
          <p className="price__discount">{discountPercentage}%</p>
        )}
      </div>
      <div className="price__right">
        {isDiscounted && <p className="price__previous">${price}</p>}
      </div>
    </div>
  );
};

export default Price;
