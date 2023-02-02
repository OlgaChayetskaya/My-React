import React from "react";
import AuthForm from "../components/Authentification/AuthForm";

const SignInPage = (props) => {
  return (
    <>
      <AuthForm onLogIn={props.onLogIn}/>
    </>
  );
};

export default SignInPage;
