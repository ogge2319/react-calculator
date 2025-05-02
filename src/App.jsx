import { useState } from 'react';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
import Display from './components/Display/Display';
import './Index.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
 

  const handleClick = (label) => {
    const operators = ['+', '-', '*', '/'];


    setExpression(prev => {
      const lastChar = prev.slice(-1);

      if (label === 'C') {
        setResult('');
        return '';
      }

    
      if (label === '⌫') {
        return prev.slice(0, -1);
      }

     
      if (label === '=') {
        try {
          const evalResult = eval(prev);
          setResult(evalResult);
        } catch {
          setResult('Fel');
        }
        return prev;
      }


      if (operators.includes(label)) {
        if (prev === '' || operators.includes(lastChar)) {
          return prev; 
        }
      }


      if (label === '.') {
        const parts = prev.split(/[\+\-\*\/]/);
        const currentNumber = parts[parts.length - 1];
        if (currentNumber.includes('.')) {
          return prev;
        }
      }

      return prev + label;
    });

    if (label !== '=' && label !== '⌫') {
      setResult('');
    }
  };

  return (
    <div className='Calculator'>
      <Display expression={expression} result={result} />
      <ButtonPanel onButtonClick={handleClick} />
    </div>
  );
}

export default App;
