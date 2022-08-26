const prompt = require('prompt-sync')()

const hours = prompt('Digite a quantidade de horas trabalhadas: ')
const valueHours = prompt('Digite o valor de sua hora trabalhada: ')
const id = prompt('Digite o seu id: ')

const calcSalary = function (hours, valueHours) {
  const money = hours * valueHours
  return money
}

const salary = calcSalary(hours, valueHours)

const print = function (salary, id) {
  console.log(`\nNúmero = ${id} \nSalário = R$ ${salary.toFixed(2)} `)
}

print(salary, id)
