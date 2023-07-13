import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [data, setData] = useState({ title: "", amount: "", date: "" });

  console.log(enteredTitle, enteredAmount, enteredDate);
  // console.log(data);

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setData((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setData((prevState) => ({ ...prevState, amount: e.target.value }));
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
    // setData((prevState) => ({ ...prevState, date: e.target.value }));
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            // value={data.title}
            onChange={titleHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            // value={data.amount}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            // value={data.date}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>

      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
