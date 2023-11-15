import React from 'react';
import './style.css';

function ExpensesList({ expenses, onDeleteExpense }) {
  return (
    <div className="mainContainer-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.date} - ${expense.amount} - {expense.category}
            <button className="btnRed" onClick={() => onDeleteExpense(expense.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;