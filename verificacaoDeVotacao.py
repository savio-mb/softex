candidato_X = 889
candidato_Y = 847
candidato_Z = 515
branco = 0


def votacao(arg):

    votos = {"qtdVotos_X": 0, "qtdVotos_Y": 0,
             "qtdVotos_Z": 0, "branco": 0, "nulo": 0}
    verificador = True
    while verificador:
        voto = input(arg)
        if voto.isdigit():
            votoInt = int(voto)
            if(votoInt == 889):
                votos["qtdVotos_X"] = votos.get("qtdVotos_X", 0) + 1
            elif(votoInt == 847):
                votos["qtdVotos_Y"] = votos.get("qtdVotos_Y", 1) + 1
            elif(votoInt == 515):
                votos["qtdVotos_Z"] = votos.get("qtdVotos_Z", 2) + 1
            elif(votoInt == 0):
                votos["branco"] = votos.get("branco", 3) + 1
            else:
                votos["nulo"] = votos.get("nulo", 4) + 1
        else:
            if(len(voto) == 0):
                votos["nulo"] = votos.get("nulo", 4) + 1
            else:
                print('O valor digitado não foi reconhecido. Tente novamente')
                continue
        continuar = input(
            "Deseja continuar votando? Digite S para sim ou N para não ")
        if(continuar == 'S' or continuar == 's'):
            continue
        else:
            verificador = False

    winner = max(votos, key=votos.get)

    return f'A quantidade de votos foram{votos} e o vencedor foi {winner}'


resultado = votacao(
    f'Digite o numero do candidato desejado: \n candidato_X: 889 \n candidato_Y: 847 \n candidato_Z: 515 \n branco: 0 \n')

print(resultado)
