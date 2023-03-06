import React, { Fragment, useState } from "react";
import Card from "../../UI/Card";
import EditMode from "./EditMode";
import ProjectItemBody from "./ProjectItemBody";
import ProjectItemHeader from "./ProjectItemHeader";
import { useDispatch } from "react-redux";
import { projectsActions } from "../../../store/projects-slice";
import { NavLink, useNavigate } from "react-router-dom";

import "./ProjectItem.css";

const ProjectItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isStyleChBxChecked, setIsStyleChBxChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const pensilChangeHandler = (readModeState) => {
    setEditMode(!readModeState);
  };
  const changeStyleHandler = (updatedState) => {
    setIsStyleChBxChecked(updatedState);
    dispatch(
      projectsActions.itemStyled({ id: props.id, styledValue: updatedState })
    );
  };
  const stopEditHandler = (updProjName, updProjDesc) => {
    setEditMode(!editMode);
    dispatch(
      projectsActions.itemEdit({ id: props.id, updProjName, updProjDesc })
    );
  };

  const doubleClickHandler = (event) => {
    event.preventDefault();
    console.log(event.detail);
    if (event.detail === 2 && props.readModeState) {
      navigate(`/card/${props.id}`);
    }
    console.log(props.id);
  };

  return (
    <Fragment>
      {/* We are NOT in edit mode */}
      {!editMode && (
        <NavLink to={"/"} onClick={doubleClickHandler}>
          <Card
            className={`project-item ${isStyleChBxChecked ? "barbie" : ""}`}
          >
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
        </NavLink>
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
