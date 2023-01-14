import { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/Button/Button";
import "./newExpense.css";

export const NewExpense = ({onNewExpenseAdd}) => {
  // console.log(onNewExpenseAdd);
  const [showForm, setShowForm] = useState(false);

  //   console.log(useState);

  const showExpenseForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense-item">
      {showForm ? (
        <ExpenseForm onShowForm={showExpenseForm} onNewExpenseAdd={onNewExpenseAdd} />
      ) : (
        <Button
          className="add-btn"
          title="Добавить новый расход"
          onClick={showExpenseForm}
        />
      )}
    </div>
  );
};
