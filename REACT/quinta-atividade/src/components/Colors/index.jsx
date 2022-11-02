import { useState } from 'react'
import './style.css'

export const Colors = () => {
  const [color, setColor] = useState('#451252')
  const HandlerBackgroundClick = () => {
    document.body.style.background = color
    const randomColors = '#' + Math.random().toString(16).slice(2, 8)
    setColor(randomColors)
  }
  return (
    <div className="center">
      <button onClick={HandlerBackgroundClick}>Mudar cor de fundo</button>
    </div>
  )
}
