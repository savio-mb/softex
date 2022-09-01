class CarroDoOvo:
    quantidadeDeOvo = 0

    def incremento(self):
        self.quantidadeDeOvo += 1

    def print(self):
        print('A quantidade de ovos vendidos foram', self.quantidadeDeOvo)


fiatUno = CarroDoOvo()
fiatUno.incremento()
fiatUno.incremento()
fiatUno.print()

golzinho1000 = CarroDoOvo()
golzinho1000.incremento()
golzinho1000.incremento()
golzinho1000.incremento()
golzinho1000.incremento()
golzinho1000.print()

voyage = CarroDoOvo()
voyage.incremento()
voyage.incremento()
voyage.incremento()
voyage.print()
