import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredList = props.items.filter((el) => {
    return el.date.getFullYear() === +filteredYear;
  });

  let listExpense;

  if (filteredList.length > 0) {
    listExpense = filteredList.map((el) => (
      <ExpenseItem
        title={el.title}
        amount={el.amount}
        date={el.date}
        key={el.id}
      />
    ));
  } else {
    listExpense = (
      <p style={{ color: "#fff", textAlign: "center" }}>No Data Found!</p>
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        {listExpense}
      </Card>
    </div>
  );
};

export default Expenses;
