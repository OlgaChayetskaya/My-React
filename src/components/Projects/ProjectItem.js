import React, { useState } from "react";

import Card from "../UI/Card";

import "./ProjectItem.css";

function ProjectItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const changeStateHandler = (event) => {
    setIsChecked(!isChecked);
    return;
  };
  return (
    <Card className={`project-item ${isChecked ? "barbie" : ""}`}>
      <div className={`project-item__description ${isChecked ? "barbie" : ""}`}>
        <h2>{props.projName}</h2>
        <div className={`project-year ${isChecked ? "barbie" : ""}`}>
          {props.year}
        </div>
        <div className={`project-item__customer ${isChecked ? "barbie" : ""}`}>
          {props.customer}
        </div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={changeStateHandler}
          />
          Barbie style
        </label>
      </div>
    </Card>
  );
}

export default ProjectItem;
