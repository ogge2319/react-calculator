import React from 'react'
import "./Button.css"



function Button({ label, onClick, gridArea, type }) {
  return (
    <button 
      className={type}
      style={{ gridArea: gridArea }} 
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button