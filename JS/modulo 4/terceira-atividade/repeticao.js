const programador = {
  linguagem: 'JavaScript',
  framework: 'React',
  café: true
}

const movimentacaoBancaria = [-8.99, 1299, -710, 320, 150, -500]

const propriedadesProgramador = function (programador) {
  for (const propriedade in programador) {
    console.log(`${propriedade}`)
  }
}

const movimentoBancario = function (movimentacaoBancaria) {
  for (const movimento of movimentacaoBancaria) {
    console.log(`${movimento}`)
  }
}

propriedadesProgramador(programador)
movimentoBancario(movimentacaoBancaria)
