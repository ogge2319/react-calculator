import React from 'react'

function Display({ value, expression }) {
  return (
    <div className="display">
      {expression && <div className="expression">{expression}</div>}
      <div className="value">{value}</div>
    </div>
  );
}


export default Display