const prompt = require('prompt-sync')()

const valor1 = prompt('Insira o primeiro número:')
const valor2 = prompt('Insira o segundo número:')
const operacao = prompt('Insira a operação que deseja: +\n-\n*\n/\n')

const calculadora = function (num1, num2, op) {
  if (op == '+') {
    return +num1 + +num2
  } else if (op == '-') {
    return +num1 - +num2
  } else if (op == '*') {
    return +num1 * +num2
  } else if (op == '/') {
    return (+num1 / +num2) % 0
      ? +num1 / +num2
      : `resultado da divisao é ${Math.round(+num1 / +num2)} com o resto ${
          +num1 % +num2
        }`
  } else {
    return `Operador digitado errado`
  }
}
const calc = calculadora(valor1, valor2, operacao)
console.log(calc)
