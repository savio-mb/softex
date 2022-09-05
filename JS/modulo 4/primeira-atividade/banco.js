const Banco = {
  conta: 745530 - 7,
  saldo: [100, 200, -50, -30, 120],
  tipo: 'Conta Corrente',
  agencia: 3101,
  buscarSaldo() {
    return this.saldo.reduce((total, valor) => total + valor, 0)
  },
  deposito(valor) {
    this.saldo.push(valor)
  },
  saque(valor) {
    const valorTotal = this.buscarSaldo()
    if (valor > valorTotal) {
      return console.error(
        `Operação não realizada. O valor de ${valor} é maior que seu saldo atual`
      )
    } else {
      this.saldo.push(-valor)
      return console.log('Saque realizado com sucesso')
    }
  },
  numeroDaConta() {
    return this.conta
  }
}

Banco.saque(150)
Banco.deposito(100)
Banco.saque(380)
console.log(Banco.numeroDaConta())
console.log(Banco.buscarSaldo())
