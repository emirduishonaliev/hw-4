import { ExpenseItem } from "../expense-item/ExpenseItem";
import "./expenses.css";
export const Expenses = ({ expenses }) => {
  return (
    <ul className="ul">
      {expenses.map((elem) => {
        return (
          <ExpenseItem title={elem.title} price={elem.price} date={elem.date} />
        );
      })}
    </ul>
  );
};
