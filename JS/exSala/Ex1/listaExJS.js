// 1-
const casa = {
  quartos: 2,
  tipo: 'casa',
  endereco: 'rua teste 123-ZS'
}

console.log(
  `${casa.tipo[0].toUpperCase() + casa.tipo.slice(1)} com ${
    casa.quartos
  } quartos localizada na ${casa.endereco}.`
)

//2-
var deuses = ['Aegir', 'Aud', 'Balder']
deuses.push('Loki')
deuses.push('Odin')
deuses.push('Frey')
console.log(deuses)

//3-
var deuses2 = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']

const ul = document.querySelector('ul')

deuses2.map(function (deus) {
  const li = document.createElement('li')
  ul.appendChild(li)
  li.textContent = deus
})

//4-
const numeros = [0, 1, 2, 3, 4, 5]

numeros.forEach(numero =>
  numero % 2 === 0
    ? console.log(`${numero} é par`)
    : console.log(`${numero} é impar`)
)

//5-

const alunos = [
  { nome: 'Diego', media: 5.5 },
  { nome: 'Julia', media: 9.5 },
  { nome: 'Roberto', media: 1.5 },
  { nome: 'Tiago', media: 6.0 }
]

const [aprovados] = alunos.filter(aluno => aluno.media > 7)
console.log(aprovados)

//6-

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numero2Dobrados = numeros2.map(numero => numero * 2)
console.log(numero2Dobrados)
