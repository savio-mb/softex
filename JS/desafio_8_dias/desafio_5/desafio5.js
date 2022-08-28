const btn = document.querySelector('.btn')
const textarea = document.querySelector('.textarea')
const result = document.querySelector('.result')
const contadorDePalavras = function () {
  text = textarea.value.trim().split(' ').length

  result.textContent = `Você tem ${text} palavras`
}

btn.addEventListener('click', contadorDePalavras)
