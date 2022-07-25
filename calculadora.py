def calculadora(num1,num2,tipo):
    if tipo == 1:
      return  num1+num2
    elif tipo == 2:
      return  num1 - num2
    elif tipo == 3:
      return  num1 * num2
    elif tipo == 4:
       return num1 / num2
    else:
        return 0


calculator = calculadora(5,6,1)
print(calculator)