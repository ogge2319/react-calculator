import './Display.css';

function Display({ expression, result }) {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      {result !== '' && <div className="value">= {result}</div>}
    </div>
  );
}

export default Display;
