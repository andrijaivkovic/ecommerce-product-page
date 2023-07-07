const QuantitySelect = ({ itemQuantity, setItemQuantity }) => {
  const handleIncreaseQuantity = () => {
    setItemQuantity((curr) => curr + 1);
  };
  const handleDecreaseQuantity = () => {
    setItemQuantity((curr) => (curr === 1 ? curr : curr - 1));
  };

  return (
    <div className="quantity-select">
      <button
        onClick={handleDecreaseQuantity}
        className="quantity-select__minus quantity-select__button"
      >
        -
      </button>
      <p className="quantity-select__quantity">{itemQuantity}</p>
      <button
        onClick={handleIncreaseQuantity}
        className="quantity-select__plus quantity-select__button"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelect;
