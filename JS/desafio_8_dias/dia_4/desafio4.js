const btn = document.querySelector('.btn')
const formNome = document.querySelector('.nome')
const formAltura = document.querySelector('.altura')
const formPeso = document.querySelector('.peso')
const result = document.querySelector('.result')

const calcIMC = function () {
  const nome = formNome.value
  const altura = +formAltura.value
  const peso = +formPeso.value
  const imc = peso / (altura * altura)

  result.textContent = `Olá ${nome} seu IMC atual é ${imc.toFixed(2)}`
}

btn.addEventListener('click', calcIMC)
