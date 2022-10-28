import './App.css'
import { H1 } from './components/H1'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('green')
  return (
    <div className="App">
      <H1 cor={color}>Olá Sávio Menezes</H1>
      <button onClick={() => setColor('blue')}>Change H1 color to blue</button>
    </div>
  )
}

export default App
