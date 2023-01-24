import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button";
import Card from "../UI/Card";
import NewProjectForm from "./NewProjectForm";
import ProjectsContext from "../context/projects-context";
import "./NewProject.css";

const NewProject = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const projCtx = useContext(ProjectsContext);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDateHandler = (enteredNewProject) => {
    const newProject = { ...enteredNewProject, id: uuidv4() };
    projCtx.onAddProject(newProject);
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
