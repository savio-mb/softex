// 1 material
class Carro {
  constructor(cor, pneu, passageiro, velocidade) {
    this.cor = cor
    this.pneu = pneu
    this.passageiro = passageiro
    this.velocidade = velocidade
  }
  correr() {
    this.velocidade += 10
  }
  freiar() {
    this.velocidade -= 10
  }
  pegarPassageiro() {
    this.passageiro = true
  }
}

//2 material
class Celular {
  constructor(power, marca, memoria) {
    this.power = power
    this.marca = marca
    this.memoria = memoria
  }
  ligarTelefone() {
    this.power = true
  }
  aumentarMemoria() {
    this.memoria += 64
  }
  trocarDeCelular(novaMarca) {
    this.marca = novaMarca
  }
}

//1 abstrato

class Musica {
  constructor(compositor, anoDeLancamento, cantor, nomeDaMúsica) {
    this.compositor = compositor
    this.ananoDeLancamento = anoDeLancamento
    this.cantor = cantor
    this.nomeDaMúsica = nomeDaMúsica
  }
  atualizarCantor(cantor) {
    this.cantor = cantor
  }
  mostrarInformacoes() {
    console.log(
      `A música ${this.nomeDaMúsica} foi criada pelo compositor ${this.compositor} no ano de ${anoDeLancamento} e é cantada pela voz de ${this.cantor}`
    )
  }
  novoCantor(cantor) {
    this.cantor = cantor
  }
}

//2 abstrato

class ContaBancaria {
  constructor(nome, endereco, documentos, saldo) {
    this.nome = nome
    this.endereco = endereco
    this.documentos = documentos
    this.saldo = saldo
  }
  atualizarDados(novoNome, novoEndereco, novoDocumentos) {
    this.nome = novoNome
    this.endereco = novoEndereco
    this.documentos = novoDocumentos
  }
  transferir(dinheiro) {
    this.saldo -= dinheiro
  }
  depositar(dinheiro) {
    this.saldo += dinheiro
  }
}
