import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FiSave } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";

import Card from "../UI/Card";

import "./ProjectItem.css";

function ProjectItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [currProjName, setCurrProjName] = useState(props.projName);
  const [updProjName, setUpdProjName] = useState(currProjName);

  const [currProjDesc, setCurrProjDesc] = useState(props.projDesc);
  const [updProjDesc, setUpdProjDesc] = useState(currProjDesc);

  const changeStateHandler = () => {
    setIsChecked(!isChecked);
  };
  const changePensilHandler = () => {
    setEditMode(!editMode);
  };

  const changeCancelHandler = () => {
    setEditMode(!editMode);
    setIsChecked(false);
    setUpdProjName(currProjName);
    setUpdProjDesc(currProjDesc);
  };
  const changeSaveHandler = () => {
    setEditMode(!editMode);
    setIsChecked(false);
    setCurrProjName(updProjName);
    setCurrProjDesc(updProjDesc);
  };

  const changeProjNameHandler = (event) => {
    setUpdProjName(event.target.value);
  };
  const changeProjDescHandler = (event) => {
    setUpdProjDesc(event.target.value);
  };

  return (
    <Card className={`project-item ${isChecked && !editMode ? "barbie" : ""}`}>
      <Card className="project-item_header">
        <div
          className={`project-item__description ${
            isChecked && !editMode ? "barbie" : ""
          }`}
        >
          <div
            className={`project-item__customer ${
              isChecked && !editMode ? "barbie" : ""
            }`}
          >
            {props.customer}
          </div>
          {!editMode && <h2>{currProjName} 'Orig'</h2>}
          {editMode && (
            <input type="text" value={updProjName} onChange={changeProjNameHandler} />
          )}
          <div
            className={`project-year ${isChecked && !editMode ? "barbie" : ""}`}
          >
            {props.year}
          </div>
          {!editMode && (
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={changeStateHandler}
                />
                Barbie style
              </label>
              <BsPencil color="white" onClick={changePensilHandler} />
            </div>
          )}
          {editMode && (
            <div>
              <FiSave color="white" onClick={changeSaveHandler} />
              <GiCancel color="white" onClick={changeCancelHandler} />
            </div>
          )}
        </div>
      </Card>
      <Card className="project-item_body">
        {!editMode && <p>{currProjDesc}</p>}
        {editMode && (
          <input type="text" value={updProjDesc} onChange={changeProjDescHandler} />
        )}
      </Card>
    </Card>
  );
}

export default ProjectItem;
