import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./AuthForm.module.css";

const pswdValidity = (value) =>
  /.{8,}/.test(value) &&
  /(?=.*?[a-z])/.test(value) &&
  /(?=.*?[0-9])/.test(value);

const emailValidity = (value) => /\S+@\S+\.\S+/.test(value);

const AuthForm = () => {
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredPswdIsValid, setEnteredPswdIsValid] = useState(false);

  const navigate = useNavigate();

  const emailValidityHandler = (emailVilidity) => {
    setEnteredEmailIsValid(emailVilidity);
    console.log("enteredemailIsValid ", emailVilidity);
  };

  const pswdValidityHandler = (pswdVilidity) => {
    setEnteredPswdIsValid(pswdVilidity);
    console.log("enteredPswdIsValid ", pswdVilidity);
  };

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPswdIsValid) {
    formIsValid = true;
    console.log("form is valid ", formIsValid);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    navigate("/");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <h1>Log in</h1>
        <Input
          inputName="email"
          inputTitle="Username (E-mail)"
          inputType="email"
          inputErrorMsg="Enter valid E-mail!"
          inputValidityFunction={emailValidity}
          onValidity={emailValidityHandler}
        />
        <Input
          inputName="password"
          inputTitle="Password"
          inputType="password"
          inputErrorMsg="Password must not be empty!(at least 1 char, 1 number and length >=8 symbols)"
          inputValidityFunction={pswdValidity}
          onValidity={pswdValidityHandler}
        />
        <div className={classes.form}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
