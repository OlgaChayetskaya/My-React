import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button";
import Card from "../UI/Card";
import NewProjectForm from "./NewProjectForm";
import { useDispatch } from "react-redux";
import { projectsActions } from "../../store/projects-slice";
import "./NewProject.css";

const NewProject = (props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDateHandler = (enteredNewProject) => {
    const newProject = { ...enteredNewProject, id: uuidv4() };
    dispatch(projectsActions.addProject(newProject));
    setIsEditing(false);
  };

  return (
    <Card className="new-project">
      {!isEditing && (
        <Button type="button" onClick={startEditingHandler}>
          Add new project.
        </Button>
      )}
      {isEditing && (
        <NewProjectForm
          onSaveNewProject={saveExpenseDateHandler}
          onCancelNewProject={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewProject;
