import React from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "./logo.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Spinner">
      <img src={logo} className="Spinner-logo" alt="logo" key={uuidv4()} />
    </div>
  );
};

export default Logo;
