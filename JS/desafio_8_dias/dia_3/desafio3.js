const prompt = require('prompt-sync')()

const product = {
  1: {
    seletion: 'Álcool',
    quantity: 0
  },
  2: {
    seletion: 'Gasolina',
    quantity: 0
  },
  3: {
    seletion: 'Disel',
    quantity: 0
  },
  4: {
    key: 4,
    mensage: 'Muito obrigado'
  }
}
const showResult = function () {
  return console.log(
    `
  ${product[4].mensage}.O resultado final foi: \n
  ${product[1].seletion} = ${product[1].quantity}\n
  ${product[2].seletion} = ${product[2].quantity}\n
  ${product[3].seletion} = ${product[3].quantity}\n
  
  `
  )
}

const favoriteProduct = function () {
  let test = true
  while (test) {
    answer = prompt(
      `Digite o número da sua escolha: \n
      ${product[1].seletion} = 1\n
      ${product[2].seletion} = 2\n
      ${product[3].seletion} = 3\n
      Ou se deseja encessar digite = 4\n`
    )
    let result = +answer
    if ((result > 0) & (result < 4)) {
      product[result].quantity++
    } else {
      console.log('Valor invalido. Tente novamente')
    }

    if (result === 4) {
      showResult()
      test = false
    }
  }
}

favoriteProduct()
