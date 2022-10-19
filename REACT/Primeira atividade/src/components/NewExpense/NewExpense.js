import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = function (props) {
  const [isEditing, setIsEdting] = useState(false)

  const startEditingHandler = function () {
    setIsEdting(true)
  }

  const stopEditingHandler = function () {
    setIsEdting(false)
  }

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData)
    setIsEdting(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
