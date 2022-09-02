class Account {
  constructor(owner, movements) {
    this.owner = owner
    this.movements = movements
  }

  get name() {
    return this.owner
  }

  set name(name) {
    this.owner = name
  }

  get latest() {
    return this.movements.slice(-1).pop()
  }

  set latest(mov) {
    this.movements.push(mov)
  }

  saldo() {
    const saldoTotal = this.movements.reduce((a, b) => a + b, 0)
    saldoTotal > 0
      ? console.log('Saldo positivo')
      : console.log('Saldo negativo')
  }
}

const account = new Account('Sávio', [200, 530, 120, 300])
console.log(account.name)
account.name = 'Sabrina'
console.log(account.name)

console.log(account.latest)
account.latest = -2000
console.log(account.latest)
account.saldo()
