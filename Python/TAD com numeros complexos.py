class TAD:
    def __init__(self):
        self.x = complex(4, 2)
        self.y = complex(5, 1)
        self.z = complex(8, 2)

    def soma(self):
        return(self.x + self.y)

    def subtracao(self):
        return(self.y - self.z)

    def multiplicacao(self):
        return(self.x * self.z)

    def divisao(self):
        return(self.z / self.y)

    def rl(self):
        return(f'A parte real de x é {self.x.real} \n de y é {self.y.real} \n e por último de z é {self.z.real} ')

    def img(self):
        return(f'A parte imaginária de x é {self.x.imag} \n de y é {self.y.imag} \n e por último de z é {self.z.imag} ')


num = TAD()
print(f'A soma é {num.soma()}')
print(f'A subtração é {num.subtracao()}')
print(f'A multiplicação é {num.multiplicacao()}')
print(f'A divisão é {num.divisao()}')
print(f'A parte real dos números são: \n {num.rl()}')
print(f'A parte imaginária dos números são: \n {num.img()}')
