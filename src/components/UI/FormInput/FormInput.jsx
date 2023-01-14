import "./formInput.css";

const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  console.log("rest", rest);
  return (
    <div className="container">
      <label htmlFor={id}>{labelName}</label>
      <input
        className="input"
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
