import React, { useState } from "react";
import CheckBox from "../UI/CheckBox";

import ProjectItem from "./ProjectItem";
import Card from "../UI/Card";

import "./Projects.css";

const Projects = (props) => {
  const [readMode, setReadMode] = useState(true);
  const readModeHandler = () => {
    setReadMode(!readMode);
  };
  return (
    <div className="projects">
      <Card className="projects__caption">
        <div>
          <CheckBox
            type="checkbox"
            checked={readMode}
            onChange={readModeHandler}            
          />
          <label>Read mode only! </label>
        </div>
      </Card>
      {props.items.map((project) => (
        <ProjectItem
          key={project.id}
          projName={project.projName}
          customer={project.customer}
          year={project.year}
          projDesc={project.projDesc}
          readModeState={readMode}
          editModeState={false}
        />
      ))}
    </div>
  );
};

export default Projects;
