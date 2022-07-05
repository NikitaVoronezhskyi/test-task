import './Button.css';

const Button = ({ buttonText, type, className , ...props }) => {
  return (
    <button type={type || 'button'} {...props} className={className || "btn"}>
      {buttonText}
    </button>
  );
};

export default Button;
