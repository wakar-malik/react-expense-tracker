import React from "react";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
