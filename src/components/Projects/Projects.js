import React, { useState } from "react";

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
      <Card className="project-item">
        <div>
          <label>
            <input
              type="checkbox"
              checked={readMode}
              onChange={readModeHandler}
            />
            Read mode only!
          </label>
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
