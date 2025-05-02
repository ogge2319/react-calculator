import { useState } from 'react';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
import Display from './components/Display/Display';
import './Index.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (label) => {
    if (label === 'C') {
      setExpression('');
      setResult('');
    } else if (label === '⌫') {
      setExpression(prev => prev.slice(0, -1));
    } else if (label === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch (e) {
        setResult('Fel');
      }
    } else {
      setExpression(prev => prev + label);
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
