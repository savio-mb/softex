import datetime

currentDateTime = datetime.datetime.now()
date = currentDateTime.date()
year = int(date.strftime("%Y"))


nome = input("Digite seu nome completo: ")


def anoDeNascimento(prompt, anoMinimo, anoMaximo):
    while True:
        try:
            ano = int(input(prompt))
            idade = year - ano
            assert anoMinimo <= ano <= anoMaximo
        except ValueError:
            print("Valor digitado não é um número")
        except AssertionError:
            print("O ano digitado está fora do limite aceito")
        else:
            break

    return idade


anoMinimo = 1922
anoMaximo = 2021
valor = anoDeNascimento(
    f"Digite o ano que você nasceu entre {anoMinimo} e {anoMaximo}: ", anoMinimo, anoMaximo)
print(f"Olá {nome}, sua idade no {year} é {valor} anos")
