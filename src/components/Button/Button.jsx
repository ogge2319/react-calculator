import './Button.css';

function Button({ label, onClick, type, gridArea }) {
  return (
    <button
      className={type}
      style={{ gridArea: gridArea }}
      onClick={() => onClick(label)}>

      {label}
    </button>
  );
}

export default Button;
