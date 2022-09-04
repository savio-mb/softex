//1-codigo
const prompt = require('prompt-sync')()

const nota1 = prompt('Insira a primeira nota: ')
const nota2 = prompt('Insira a segunda nota: ')
const nota3 = prompt('Insira a terceira nota: ')
const somaDasNotas = (+nota1 + +nota2 + +nota3) / 3
const media = 7

verificar = somaDasNotas >= media ? 'Aluno aprovado' : 'Aluno reprovado'
console.log(verificar)

//2-codigo

const n1 = prompt('Insira a primeira nota: ')
const n2 = prompt('Insira a segunda nota: ')
const somaDasNotas2 = +n1 + +n2
const media2 = 21
const diferencaNaNota = media2 - somaDasNotas2
console.log(`Você precisa tirar ${diferencaNaNota} para ficar com media 7`)
