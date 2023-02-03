import React from "react";
import "./Button.css";

const Button = (props) => {
  const classes = "button" 
  return (
    <button
      className={classes}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
