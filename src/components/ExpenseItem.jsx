import "./ExpenseItem.css";
import React from "react";

// function ExpenseItem(props) {
function ExpenseItem({ date, title, amount }) {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>

    // <div className="expense-item">
    //   <div>{date.toISOString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{title}</h2>
    //     <div className="expense-item__price">{amount}</div>
    //   </div>
    // </div>
  );
}

export default ExpenseItem;
