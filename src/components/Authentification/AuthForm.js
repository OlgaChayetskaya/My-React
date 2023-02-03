import React, { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [pswdIsValid, setPswdIsValid] = useState();
  const [enteredPswd, setEnteredPswd] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPswd.trim().length > 6
      );
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPswd]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const pswdChangeHandler = (event) => {
    setEnteredPswd(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const inputEmailBlurHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const inputPswdBlurHandler = () => {
    setPswdIsValid(enteredPswd.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("Email:", enteredEmail, "Password:", enteredPswd);

    setEnteredEmail("");
    setEnteredPswd("");

    navigate("/");
    //return redirect("/");
  };

  return (
    <>
      <Form method="post" onSubmit={submitHandler} className={classes.form}>
        <h1>Log in</h1>
        <div
          className={`${classes.form} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">Username (E-mail)</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={emailChangeHandler}
            onBlur={inputEmailBlurHandler}
            value={enteredEmail}
            required
          />
        </div>
        <div
          className={`${classes.form} ${
            pswdIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={pswdChangeHandler}
            onBlur={inputPswdBlurHandler}
            value={enteredPswd}
            required
          />
        </div>
        <div>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AuthForm;
