import React, { useState } from "react";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

// const ExpenseItem = (props) => (
//   <div className="expense-item">
//     <div>{props.date.toISOString()}</div>
//     <div className="expense-item__description">
//       <h2>{props.title}</h2>
//       <div className="expense-item__price">{props.amount}</div>
//     </div>
//   </div>
// );

export default ExpenseItem;
