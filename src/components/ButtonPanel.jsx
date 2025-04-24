import React from 'react'
import Button from './Button'

function ButtonPanel({ onButtonClick }) {

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '0','.','⌫', 'C',
    '=', '/'
  ];


  return (
    <div className='ButtonPanel'>
      {buttons.map((btn) => (
        <Button key={btn} label={btn} onClick={onButtonClick} />
      ))}
    </div>
  )
}

export default ButtonPanel