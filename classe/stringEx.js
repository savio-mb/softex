const nomeCompleto = 'sávio menezes brito'

//function 1
const uppercase = function (string) {
  return string.toUpperCase()
}

const nomeMaiusculo = uppercase(nomeCompleto)
console.log(nomeMaiusculo)

//function 2
const lastname = function (string) {
  const sobrenome = string.split(' ').slice(1).join(' ')
  return sobrenome
}

const sobrenome = lastname(nomeCompleto)
console.log(sobrenome)

//function 3
const convertTitleCase = function (str) {
  const [first, ...others] = str.split(' ')
  return [first.replace(first[0], first[0].toUpperCase()), ...others].join(' ')
}

const primeiraLetraMaiuscula = convertTitleCase(nomeCompleto)
console.log(primeiraLetraMaiuscula)
