import React, { useState, useEffect } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]); // Adds new expense to the state
  };

  const handleDelete = (id) => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredExpenses); // Removes an expense from the state
  };

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <header className="app-header">
          <h1 className="app-title">Expense Tracker</h1>
          <p className="app-subtitle">Track your daily expenses easily</p>
        </header>

        <main className="app-main">
          <div className="form-section">
            <ExpenseForm onSubmit={handleAddExpense} />
          </div>

          <div className="summary-section">
            <div className="summary-card">
              <h2 className="total-amount">Total: Ksh {totalAmount.toFixed(2)}</h2>
              <p className="expense-count">
                {expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'} recorded
              </p>
            </div>
          </div>

          <div className="list-section">
            <ExpenseList expenses={expenses} onDelete={handleDelete} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
