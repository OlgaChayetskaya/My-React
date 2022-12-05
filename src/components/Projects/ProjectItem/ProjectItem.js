import React, { Fragment, useState } from "react";

import Card from "../../UI/Card";
import EditMode from "./EditMode";

import "./ProjectItem.css";
import ProjectItemBody from "./ProjectItemBody";
import ProjectItemHeader from "./ProjectItemHeader";

const ProjectItem = (props) => {
  const [isStyleChBxChecked, setIsStyleChBxChecked] = useState(false);
  const [editMode, setEditMode] = useState(props.editModeState);
  const [currProjName, setCurrProjName] = useState(props.projName);
  const [currProjDesc, setCurrProjDesc] = useState(props.projDesc);

  const pensilChangeHandler = (readModeState) => {
    setEditMode(!readModeState);
  };
  const changeStyleHandler = () => {
    setIsStyleChBxChecked(!isStyleChBxChecked);
  };
  const stopEditHandler = (updatedData) => {
    setEditMode(!editMode);
    setIsStyleChBxChecked(false);
    setCurrProjName(updatedData.projName);
    setCurrProjDesc(updatedData.projDesc);
  };

  return (
    <Fragment>
      {!editMode && (
        <Card className={`project-item ${isStyleChBxChecked ? "barbie" : ""}`}>
          <ProjectItemHeader
            editMode={editMode}
            isStyleChBxChecked={isStyleChBxChecked}
            currProjName={currProjName}
            customer={props.customer}
            year={props.year}
            readModeState={props.readModeState}
            onChangeStyle={changeStyleHandler}
            onPensilChange={pensilChangeHandler}
          />
          <ProjectItemBody
            editMode={editMode}
            isStyleChBxChecked={isStyleChBxChecked}
            currProjDesc={currProjDesc}
            readModeState={props.readModeState}
            onChangeStyle={changeStyleHandler}
            onPensilChange={pensilChangeHandler}
          />
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
    </Fragment>
  );
};

export default ProjectItem;
