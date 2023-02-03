import React, { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button";

import classes from "./AuthForm.module.css";

const pswdValidity = (value) =>
  /.{8,}/.test(value) &&
  /(?=.*?[a-z])/.test(value) &&
  /(?=.*?[0-9])/.test(value);

const isEmail = (value) => value.includes("@");

const AuthForm = (props) => {
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChange,
    inputBlurHandler: emailInputBlur,
    reset: emailInputReset,
  } = useInput(isEmail);

  const {
    value: enteredPswd,
    isValid: enteredPswdIsValid,
    hasError: pswdInputHasError,
    valueChangeHandler: pswdChange,
    inputBlurHandler: pswdInputBlur,
    reset: pswdInputReset,
  } = useInput(pswdValidity);

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPswdIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(" enteredEmail ", enteredEmail, "enteredPswd ", enteredPswd);

    emailInputReset();
    pswdInputReset();

    navigate("/");
  };

  const emailInputClasses = emailInputHasError ? classes.invalid : "";
  const pswdInputClasses = pswdInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <h1>Log in</h1>
        <div className={emailInputClasses}>
          <label htmlFor="email">Username (E-mail)</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={emailChange}
            onBlur={emailInputBlur}
            value={enteredEmail}
            required
          />
          {emailInputHasError && (
            <p className="error-text">Enter valid E-mail!</p>
          )}
        </div>
        <div className={pswdInputClasses}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={pswdChange}
            onBlur={pswdInputBlur}
            value={enteredPswd}
            required
          />
          {pswdInputHasError && (
            <p className="error-text">Password must not be empty!</p>
          )}
        </div>
        <div>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
export default AuthForm;
