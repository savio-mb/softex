def calculadora():
    verificador = True
    while verificador == True:  
        tipo = int(input('Digite o operador desejado \n 1. Soma \n 2. Subtração \n 3. Multiplicação \n 4. Divisão \n 0. Sair'))
        num1 = int(input('Digite o primeiro número: '))
        num2 = int(input('Digite o segundo número: '))
        
        if tipo == 1:
          print("O resultado da soma é: ",num1+num2)
        elif tipo == 2:
          print("O resultado da subtração é: ",num1 - num2)
        elif tipo == 3:
          print("O resultado da multiplicação é: ",num1 * num2)
        elif tipo == 4:
           print("O resultado da divisão é: ",num1 / num2)
        elif tipo == 0:
            verificador = False
            break 
        else:
            print('Essa opção não existe')
        


calculator = calculadora()
print(calculator)