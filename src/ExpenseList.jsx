import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses = [], onDelete }) {
  return (
    <div className="expense-list-container">
      {expenses.length > 0 ? (
        <ul className="expense-list">
          {expenses.map((exp) => (
            <li key={exp.id} className="expense-item">
              <div className="expense-info">
                <div className="expense-main">
                  <span className="expense-desc">{exp.description}</span>
                  <span className="expense-amount">Ksh {exp.amount.toFixed(2)}</span>
                </div>
                <div className="expense-meta">
                  <span className={`expense-category ${exp.category.toLowerCase()}`}>
                    {exp.category}
                  </span>
                  <span className="expense-date">{exp.date}</span>
                </div>
              </div>
              <button
                onClick={() => onDelete(exp.id)}
                className="delete-btn"
                aria-label="Delete expense"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <p>No expenses found</p>
          <p>Add your first expense to get started</p>
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
