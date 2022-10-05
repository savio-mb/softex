// 1)
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
]

//1.1:
const idadeUsuario = usuarios.map(usuario => usuario.idade)

//1.2:
const usuariosRocketMaiorDeIdade = usuarios.filter(
  usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18
)

//1.3
const trabalhaNaGoogle = usuarios.find(usuario => usuario.empresa === 'Google')

// 1.4
const idadesMultiplicadasEmaiorQueCinquenta = usuarios
  .map(usuario => {
    return {
      nome: usuario.nome,
      idade: usuario.idade * 2,
      empresa: usuario.empresa
    }
  })
  .filter(usuario => usuario.idade < 50)

// 2)

// 2.1
const arr = [1, 2, 3, 4, 5]
const newArray = arr.map(item => item + 10)

//2.2
const usuario = { nome: 'Diego', idade: 23 }
const mostrarIdade = usuario => usuario.idade
mostrarIdade(usuario)
