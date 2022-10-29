import './App.css'
import { H1 } from './components/H1'
import { useState } from 'react'
import { ChangeColor } from './components/ChangeColor'

function App() {
  const [color, setColor] = useState('green')

  return (
    <div className="App">
      <H1 cor={color}>Olá Sávio Menezes</H1>
      <ChangeColor cor={'black'} setColor={() => setColor()} />
    </div>
  )
}

export default App
