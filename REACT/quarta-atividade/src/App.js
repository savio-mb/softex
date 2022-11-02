import './App.css'
import { H1 } from './components/H1'
import { useState } from 'react'
import { ChangeColor } from './components/ChangeColor'

function App() {
  const [color, setColor] = useState('green')
  const [count, setCounter] = useState('')

  const changeColorHandler = color => {
    if (color === 'green') {
      setColor('blue')
      setCounter(+count + 1)
    } else {
      setColor('green')
      setCounter(+count + 1)
    }
    return color
  }

  return (
    <div className="App">
      <H1 cor={color}>Olá Sávio Menezes</H1>
      <ChangeColor cor={color} setColor={changeColorHandler} />
      <p>{`A quantidade de vezes que mudou de cor foi ${count}`}</p>
    </div>
  )
}

export default App
