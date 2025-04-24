import { useState } from 'react'
import ButtonPanel from './components/ButtonPanel'
import Display from './components/Display'
import { calculate } from './math'

function App() {
  const [input, setInput] = useState("")
  const [firstNum, setFirstNum] = useState(null)
  const [operator, setOperator] = useState(null)

  const handleClick = (label) => {

    if (!isNaN(label)) {
      setInput(input + label)

    }else if (['+','-','*','/'].includes(label)) {

      setFirstNum(Number(input))
      setOperator(label)
      setInput("")

    }else if (label === "=") {

      const result = calculate(firstNum, operator, Number(input));
      setInput(result);
      setFirstNum(null);
      setOperator(null);

    }else if(label === "C") {

      setInput('');
      setFirstNum(null);
      setOperator(null);

    }
  }
  return (
    <div className='Calculator'>
      <Display value= {input} />
      <ButtonPanel onButtonClick={handleClick}/>
    </div>
  )
}

export default App
