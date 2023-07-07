const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button button--add-to-cart">
      {children}
    </button>
  );
};

export default Button;
