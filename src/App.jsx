import { useState } from 'react'
import Button from './components/Button'
import ButtonPanel from './components/ButtonPanel'
import Display from './components/Display'


function App() {
  const [input, setInput] = useState("")
  return (
    <div className='Calculator'>
      <Button />
      <ButtonPanel />
      <Display />
    </div>
  )
}

export default App
