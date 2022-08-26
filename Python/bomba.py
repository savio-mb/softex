import time
tempo = int(input('Digite a quantidade de tempo antes de estourar a bomba: '))
msgInicial = 'iniciando contagem regressiva'
print(msgInicial)
for i in range(tempo,0,-1):
    print('faltam', i,'segundos')
    time.sleep(1) 
print('BUM')