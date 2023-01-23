import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button";
import Card from "../UI/Card";
import NewProjectForm from "./NewProjectForm";
import "./NewProject.css";

const NewProject = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDateHadler = (enteredNewProject) => {
    //const newProject = { ...enteredNewProject, id: Math.random().toString() };
    const newProject = { ...enteredNewProject, id: uuidv4() };
    props.onAddProject(newProject);
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
          onSaveNewProject={saveExpenseDateHadler}
          onCancelNewProject={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewProject;
