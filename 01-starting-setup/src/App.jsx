import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import { List } from "./components/Test";
import Licznik from "./components/Expenses/Counter";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses] = useState(DUMMY_EXPENSES);
  
  const listek = expenses.map((element, i) => (
    <List index={i} value={element} key={i + 5}></List>
  ));
  console.log("list", listek);
  
  return (
    <div>
      <NewExpense />
      {expenses.map((expense) => (
        <ExpenseItem
          key ={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      <Licznik></Licznik>
    </div>
  );
};

export default App;
