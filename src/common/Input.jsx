import './Input.css';

const Input = ({ type, labelText, placeholderText, ...props }) => {
  return (
    <label className="input-wrapper">
      {labelText}
      <input className='common-input' type={type || 'text'} {...props} placeholder={placeholderText} />
    </label>
  );
};

export default Input;
