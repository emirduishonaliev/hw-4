import { useState } from "react";
import "./App.css";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "A4 Bumaga",
      price: 300,
      date: new Date(),
    },
    {
      title: "Iphone",
      price: 50000,
      date: new Date(),
    },
  ]);
  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses); 
  };

  
  return (
    <div>
      <NewExpense onNewExpenseAdd={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
