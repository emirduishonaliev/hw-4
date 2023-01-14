import FormInput from "../UI/FormInput/FormInput";
import Button from "../UI/Button/Button";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import "./expense.css";
import { useState } from "react";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(null);

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    const expenseData = {
      title,
      date,
      price,
    };
    // console.log(expenseData);
    event.preventDefault();

    props.onNewExpenseAdd(expenseData);
  };

  return (
    <form>
      <div className="parent-input-btn">
        <div>
          <div className="two-input">
            <FormInput
              id="name"
              labelName="Название"
              inputType="text"
              placeholder="Введите..."
              value={title}
              onChange={titleInputChangeHandler}
            />

            <FormInput
              id="price"
              labelName="Количество денег"
              inputType="number"
              placeholder=""
              value={price}
              onChange={priceInputChangeHandler}
            />
          </div>
          <div>
            <FormInput
              id="date"
              labelName="Указать дату"
              inputType="date"
              placeholder="дд.мм.гггг"
              onChange={dateInputChangeHandler}
            />
          </div>
        </div>

        <div>
          <Button
            className="cancel-btn"
            title="Отмена"
            onClick={cancelHandler}
          />
          <Button
            className="save-btn"
            title="Сохранить"
            onClick={saveHandler}
          />
        </div>
      </div>
    </form>
  );
};
