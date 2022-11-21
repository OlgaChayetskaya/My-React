import React, { useState } from "react";

import { BsPencil } from "react-icons/bs";

import Card from "../UI/Card";
import EditMode from "./EditMode";

import "./ProjectItem.css";

const ProjectItem = (props) => {
  const [isStyleChBxChecked, setIsStyleChBxChecked] = useState(false);
  const [editMode, setEditMode] = useState(props.editModeState);
  const [currProjName, setCurrProjName] = useState(props.projName);
  const [currProjDesc, setCurrProjDesc] = useState(props.projDesc);

  const changePensilHandler = () => {
    setEditMode(!props.readModeState);
  };
  const changeStyleChBxHandler = () => {
    setIsStyleChBxChecked(!isStyleChBxChecked);
  };
  const stopEditHandler = (updatedData) => {
    setEditMode(!editMode);
    setIsStyleChBxChecked(false);
    setCurrProjName(updatedData.projName);
    setCurrProjDesc(updatedData.projDesc);
  };
  return (
    <div>
      {!editMode &&  (
        <Card className={`project-item ${isStyleChBxChecked ? "barbie" : ""}`}>
          <Card className="project-item_header">
            <div
              className={`project-item__description ${
                isStyleChBxChecked ? "barbie" : ""
              }`}
            >
              <div
                className={`project-item__customer ${
                  isStyleChBxChecked ? "barbie" : ""
                }`}
              >
                {props.customer}
              </div>
              <h2>{currProjName}</h2>
              <div
                className={`project-year ${isStyleChBxChecked ? "barbie" : ""}`}
              >
                {props.year}
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={isStyleChBxChecked}
                    onChange={changeStyleChBxHandler}
                  />
                  Barbie style
                </label>
                {!props.readModeState && (<BsPencil color="white" onClick={changePensilHandler} />)}
              </div>
            </div>
          </Card>
          <Card className="project-item_body">
            <p>{currProjDesc}</p>
          </Card>
        </Card>
      )}
      {editMode && (
        <EditMode
          onStopEdit={stopEditHandler}
          projName={currProjName}
          customer={props.customer}
          year={props.year}
          projDesc={currProjDesc}
          readModeState={props.readModeState}
        />
      )}
    </div>
  );
  
};

export default ProjectItem;
