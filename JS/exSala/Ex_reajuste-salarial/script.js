const salary = document.querySelector('.salary')
const btn = document.querySelector('.btn-adjust')
const oldSalary = document.querySelector('.old-salary')
const percentageIncreaseText = document.querySelector('.percentage-increase')
const increaseValueText = document.querySelector('.increase-value')
const newSalaryText = document.querySelector('.new-salary')

let salaryValue
let newSalary
let percentageIncrease
let percentage
let increaseValue

const calcSalary = e => {
  e.preventDefault()
  salaryValue = +salary.value

  if (salaryValue <= 280) {
    newSalary = salaryValue + salaryValue * 0.2
    increaseValue = salaryValue * 0.2
    percentage = '20%'
  } else if (salaryValue > 280 && salaryValue <= 700) {
    newSalary = salaryValue + salaryValue * 0.15
    increaseValue = salaryValue * 0.15
    percentage = '15%'
  } else if (salaryValue > 700 && salaryValue < 1500) {
    newSalary = salaryValue + salaryValue * 0.1
    increaseValue = salaryValue * 0.1
    percentage = '10%'
  } else {
    newSalary = salaryValue + salaryValue * 0.05
    increaseValue = salaryValue * 0.05
    percentage = '5%'
  }

  oldSalary.textContent = salaryValue
  percentageIncreaseText.textContent = percentage
  increaseValueText.textContent = increaseValue
  newSalaryText.textContent = newSalary
}

btn.addEventListener('click', calcSalary)
