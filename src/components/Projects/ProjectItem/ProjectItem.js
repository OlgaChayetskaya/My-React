import React, { Fragment, useState } from "react";
import Card from "../../UI/Card";
import EditMode from "./EditMode";
import ProjectItemBody from "./ProjectItemBody";
import ProjectItemHeader from "./ProjectItemHeader";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  const [isStyleChBxChecked, setIsStyleChBxChecked] = useState(false);
  const [editMode, setEditMode] = useState(false); //useState(props.editModeState);

  const pensilChangeHandler = (readModeState) => {
    setEditMode(!readModeState);
  };
  const changeStyleHandler = (updatedState) => {
    setIsStyleChBxChecked(updatedState);
    props.onItemStyled(props.id, updatedState);
  };
  const stopEditHandler = (updProjName, updProjDesc) => {
    setEditMode(!editMode);
    setIsStyleChBxChecked(false);
    props.onItemEdit(props.id, updProjName, updProjDesc);
  };

  return (
    <Fragment>
      {/* We are NOT in edit mode */}
      {!editMode && (
        <Card className={`project-item ${isStyleChBxChecked ? "barbie" : ""}`}>
          <ProjectItemHeader
            editMode={editMode}
            isStyleChBxChecked={isStyleChBxChecked}
            currProjName={props.projName}
            customer={props.customer}
            year={props.year}
            readModeState={props.readModeState}
            onChangeStyle={changeStyleHandler}
            onPensilChange={pensilChangeHandler}
          />
          <ProjectItemBody
            editMode={editMode}
            isStyleChBxChecked={isStyleChBxChecked}
            currProjDesc={props.projDesc}
            readModeState={props.readModeState}
            onChangeStyle={changeStyleHandler}
            onPensilChange={pensilChangeHandler}
          />
        </Card>
      )}
      {/* We are in edit mode */}
      {editMode && (
        <EditMode
          onStopEdit={stopEditHandler}
          projName={props.projName}
          customer={props.customer}
          year={props.year}
          projDesc={props.projDesc}
          readModeState={props.readModeState}
        />
      )}
    </Fragment>
  );
};

export default ProjectItem;
