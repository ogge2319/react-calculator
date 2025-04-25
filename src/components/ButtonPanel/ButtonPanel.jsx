import React from 'react'
import Button from '../Button/Button'
import "./ButtonPanel.css"

function ButtonPanel({ onButtonClick }) {

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '0','.','⌫', 'C',
    '=', '/'
  ];


  return (
    <div className='button-panel'>
      {buttons.map((label) => (
        <Button key={label} label={label} onClick={onButtonClick} />
      ))}
    </div>
  )
}

export default ButtonPanel