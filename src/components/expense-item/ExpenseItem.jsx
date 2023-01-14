import "./expenseItem.css";

export const ExpenseItem = (props) => {
  const { title, date, price } = props;
  return (
    <div className="contain ">
      <p>{date.toString()}</p>
      <p>{title}</p>
      <p className="price">{`${price} som`}</p>
    </div>
  );
};
