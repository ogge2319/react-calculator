import React from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';

function ButtonPanel({ onButtonClick }) {
  const buttons = [
    { label: '7', area: 'seven' },
    { label: '8', area: 'eight' },
    { label: '9', area: 'nine' },
    { label: '+', area: 'plus' },
    { label: '4', area: 'four' },
    { label: '5', area: 'five' },
    { label: '6', area: 'six' },
    { label: '-', area: 'minus' },
    { label: '1', area: 'one' },
    { label: '2', area: 'two' },
    { label: '3', area: 'three' },
    { label: '*', area: 'times' },
    { label: '0', area: 'zero' },
    { label: '.', area: 'dot' },
    { label: '⌫', area: 'back' },
    { label: 'C', area: 'clear' },
    { label: '=', area: 'equals' },
    { label: '/', area: 'divide' }
  ];

  const getButtonType = (label) => {
    if (label === '=') return 'equals';
    if (label === 'C') return 'clear';
    if (['+', '-', '*', '/'].includes(label)) return 'operator';
    if (label === '⌫') return 'backspace';
    return null;
  };

  return (
    <div className="button-panel">
      {buttons.map((btn) => (
        <Button
          key={btn.label}
          label={btn.label}
          onClick={onButtonClick}
          type={getButtonType(btn.label)}
          gridArea={btn.area}
        />
      ))}
    </div>
  );
}

export default ButtonPanel;
