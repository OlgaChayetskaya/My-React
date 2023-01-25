import React from "react";
import Card from "../../UI/Card";
import { BsPencil } from "react-icons/bs";
import "./ProjectItemHeader.css";

const ProjectItemHeader = (props) => {
  
  const changeStyleClickHandler = () => {
    props.onChangeStyle(!props.isStyleChBxChecked);
  };
  const pensilChangeClickHandler = () => {
    props.onPensilChange(props.readModeState);
    props.onChangeStyle(false);
  };

  return (
    <Card className="project-item_header">
      <div
        className={`project-item__description ${
          props.isStyleChBxChecked ? "barbie" : ""
        }`}
      >
        <div
          className={`project-item__customer ${
            props.isStyleChBxChecked ? "barbie" : ""
          }`}
        >
          {props.customer}
        </div>
        <h2>{props.currProjName}</h2>
        <div
          className={`project-year ${props.isStyleChBxChecked ? "barbie" : ""}`}
        >
          {props.year}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={props.isStyleChBxChecked}
              onChange={changeStyleClickHandler}
            />
            Barbie style
          </label>
          {/* Only when ReadMode is OFF */}
          {!props.readModeState && (
            <BsPencil color="white" onClick={pensilChangeClickHandler} />
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectItemHeader;
