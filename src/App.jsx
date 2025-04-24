import { useState } from 'react';
import ButtonPanel from './components/ButtonPanel';
import Display from './components/Display';
import { calculate } from './math';

function App() {
  const [input, setInput] = useState('');
  const [firstNum, setFirstNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [expression, setExpression] = useState('');

  const handleClick = (label) => {
    if (!isNaN(label) || label === '.') {

      setInput(prev => prev + label);

    } else if (['+', '-', '*', '/'].includes(label)) {

      if (input === '') return;
      setFirstNum(parseFloat(input));
      setOperator(label);
      setExpression(`${input} ${label}`);
      setInput('');

    } else if (label === '=') {

      const result = calculate(firstNum, operator, parseFloat(input));
      setExpression(prev => `${prev} ${input} = ${result}`);
      setInput(String(result));
      setFirstNum(null);
      setOperator(null);

    } else if (label === 'C') {

      setInput('');
      setFirstNum(null);
      setOperator(null);
      setExpression('');

    }
    else if (label === '⌫') {

      if (input.length > 0) {
        setInput(prev => prev.slice(0, -1));

      } else if (operator && expression) {

        const updatedExpression = expression.slice(0, expression.lastIndexOf(' '));
        setExpression('');
        setInput(String(firstNum));
        setFirstNum(null);
        setOperator(null);
        
      }
    }
  };

  return (
    <div className='Calculator'>
      <Display value={input} expression={expression} />
      <ButtonPanel onButtonClick={handleClick} />
    </div>
  );
}

export default App;
