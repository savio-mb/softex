import pandas as pd
df = pd.read_csv(r'C:\Users\savio\Desktop\notas_alunos.csv', sep=r';')
print(df.columns.tolist())
df['media'] = (df['nota_1'] + df['nota_2']) / 2

df.loc[(df['media'] >= 7) & (df['faltas'] < 5), 'situacao'] = 'aprovado'
df.loc[(df['media'] < 7) | (df['faltas'] >= 5), 'situacao'] = 'reprovado'


maiorQuantidadeDeFaltas = df['faltas'].max()
alunoComMaiorAusencia = df.aluno[df.faltas == maiorQuantidadeDeFaltas].tolist()
mediaGeral = (df['media'].sum()) / 4
maiorMedia = df['media'].max()
alunoComMaiorMedia = df.aluno[df.media == maiorMedia].tolist()


print(
    f' o maior número de faltas foi do aluno {alunoComMaiorAusencia} e a quantidade foi {maiorQuantidadeDeFaltas}')

print(f'A media geral da turma foi {mediaGeral}')
print(
    f'A maior media entre os alunos foi {maiorMedia} e o aluno foi {alunoComMaiorMedia}')


df.to_csv(r'C:\Users\savio\Desktop\alunos_situacao.csv', index=False)
