const { consultarCep } = require('correios-brasil')
const { rastrearEncomendas } = require('correios-brasil')

const cep = '56330055'

consultarCep(cep).then(res => {
  try {
    console.log(res)
  } catch (error) {
    console.error(error)
  }
})

let codRastreio = ['LB290784401HK']

rastrearEncomendas(codRastreio).then(res => {
  try {
    console.log(res)
  } catch (error) {
    console.error(error)
  }
})
