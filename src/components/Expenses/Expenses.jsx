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

  const availData = [2022, 2021, 2020, 2019].filter(
    (el) => el != +filteredYear
  );

  let text;

  for (const items of availData) {
    text += `, ${items}`;
  }

  return (
    <div>
      <Card className="expenses">
        <p style={{ color: "#fff", textAlign: "center" }}>
          Data for {...text} is hidden!
        </p>
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
