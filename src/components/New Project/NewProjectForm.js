import React, { useState } from "react";
import Button from "../UI/Button";
import "./NewProjectForm.css";

const NewProjectForm = (props) => {
  const [newProjName, setNewProjName] = useState("Education");
  const [newProjDesc, setNewProjDesc] = useState("Learn React");
  const [newProjYear, setNewProjYear] = useState("2023");
  const [newProjCust, setNewProjCust] = useState("IBA");

  const newProjNameHandler = (event) => {
    setNewProjName(event.target.value);
  };
  const newProjDescHandler = (event) => {
    setNewProjDesc(event.target.value);
  };
  const newProjYearHandler = (event) => {
    setNewProjYear(event.target.value);
  };
  const newProjCustHandler = (event) => {
    setNewProjCust(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const newProject = {
      projName: newProjName,
      projDesc: newProjDesc,
      customer: newProjCust,
      year: newProjYear,
      styled: false,
    };
    props.onSaveNewProject(newProject);
  };
  return (
    <form onSubmit={saveHandler} className="new-project__controls">
      <div className="new-project__control">
        <label htmlFor="year">Year</label>
        <input
          id="year"
          type="number"
          min="2008"
          max="2023"
          step="1"
          value={newProjYear}
          onChange={newProjYearHandler}
        ></input>
      </div>
      <div className="new-project__control">
        <label htmlFor="customer">Customer</label>
        <input
          id="customer"
          type="text"
          value={newProjCust}
          onChange={newProjCustHandler}
        ></input>
      </div>

      <div className="new-project__control-wide">
        <label htmlFor="name">Project Name</label>
        <input
          id="name"
          type="text"
          value={newProjName}
          onChange={newProjNameHandler}
        ></input>
      </div>
      <div className="new-project__control-wide">
        <label htmlFor="about">Project Description</label>
        <input
          id="about"
          type="text"
          value={newProjDesc}
          onChange={newProjDescHandler}
        ></input>
      </div>

      <div className="new-project__actions">
        <Button type="submit">Add Project</Button>
        <Button onClick={props.onCancelNewProject}>Cancel</Button>
      </div>
    </form>
  );
};

export default NewProjectForm;
