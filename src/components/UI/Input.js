import React from "react";
import useInput from "../../hooks/use-input";
import classes from "./Input.module.css";

const Input = (props) => {
  const {
    value: enteredValue,
    hasError: inputHasError,
    valueChangeHandler: valueChange,
    inputBlurHandler: inputBlur,
  } = useInput(props.inputValidityFunction, props.onValidity);

  const inputClasses = inputHasError ? classes.invalid : "";

  return (
    <div className={inputClasses}>
      <label htmlFor={props.inputName}>{props.inputTitle}</label>
      <input
        id={props.inputName}
        type={props.inputType}
        name={props.inputName}
        onChange={valueChange}
        onBlur={inputBlur}
        value={enteredValue}
        required
      />
      {inputHasError && <p>{props.inputErrorMsg}</p>}
    </div>
  );
};

export default Input;
