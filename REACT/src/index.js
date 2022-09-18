import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
// ReactDOM.createRoot(root da nossa aplicação react): O comando como descrito
//dentro de parênteses diz qual é o root da nossa aplicação react.
//O local principal onde a aplicação React sera renderizada.
root.render(<App />)
// Diz para o react que dentro da div selecionada(id root acima) deve ser trocada
// por o valo passado dentro dos parenteses.
