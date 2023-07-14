import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(''); // pojedyńcza
  const [enteredAmount,setEnteredAmount] = useState(''); // pojedyńcza
  const [enteredDate,setEnteredDate] = useState(''); // pojedyńcza
  // const [userInput, setUserInput] = useState({   // dla wszystkich 3 na raz
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enetredDate:'',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // pojedyńcza
    // setUserInput({                   // dla wszystkich 3 na raz (oryginalne wartości zostają dla Amout i Date )
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput ((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}; // UŻYWAMY TEGO gdy aktualizacja stanu zależy od porzedniego stanu
    // });
  };

  const amoutChangeHandler = (event) =>{
    setEnteredAmount (event.target.value); // pojedyńcza
    // setUserInput({                     // dla wszystkich 3 na raz (oryginalne wartości zostają dla Title i Date )
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);  // pojedyńcza
    // setUserInput({                   // dla wszystkich 3 na raz (oryginalne wartości zostają dla Title i Amout )
    //   ...userInput,
    //   enetredDate: event.target.value,
    // })
  }
  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__controls">
        <lable>Title</lable>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__controls">
        <lable>amount</lable>
        <input type="number" min="0.01" step="0.01" onChange={amoutChangeHandler} />
      </div>
      <div className="new-expense__controls">
        <lable>Date</lable>
        <input type="date" min="2019-01-01" max="2023-07-05" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;
