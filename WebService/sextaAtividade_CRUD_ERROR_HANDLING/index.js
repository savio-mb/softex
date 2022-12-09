const express = require('express')
const server = express()
server.listen(3000)
server.use(express.json())

const livros = [
  {
    nome: 'Javascript A Bíblia',
    autor: 'Danny Goodman',
    ISBN: '8535208283'
  }
]

server.get('/livros', (req, res) => {
  res.json(livros)
})

server.post('/livros', (req, res) => {
  const { nome, autor, ISBN } = req.body
  livros.push({ nome, autor, ISBN })
  return res.json(livros)
})

server.put('/livros/:index', (req, res) => {
  const { index } = req.params
  const { nome, autor, ISBN } = req.body

  livros[index] = { nome, autor, ISBN }

  return res.json(livros)
})

server.delete('/livros/:index', (req, res) => {
  const { index } = req.params
  livros.splice(index, 1)
  res.send(204)
})
