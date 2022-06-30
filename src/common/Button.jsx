import './Button.css';

const Button = ({ buttonText, type, ...props }) => {
  return (
    <button type={type || 'button'} {...props} className="btn">
      {buttonText}
    </button>
  );
};

export default Button;
