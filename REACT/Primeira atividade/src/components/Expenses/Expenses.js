import { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = function (selectedYear) {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.exp.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
