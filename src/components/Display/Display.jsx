import React from 'react';
import "./Display.css"
function Display({ value, expression }) {
  return (
    <div className="display">
      <div className="value">
        {expression.includes("=") ? expression : `${expression} ${value}`}
      </div>
    </div>
  );
}

export default Display;
