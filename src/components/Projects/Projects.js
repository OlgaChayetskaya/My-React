import React from "react";

import ProjectItem from "./ProjectItem";

import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="projects">
      {props.items.map((project) => (
        <ProjectItem
          key={project.id}
          projName={project.projName}
          customer={project.customer}
          year={project.year}
          projDesc={project.projDesc}
        />
      ))}
    </div>
  );
};

export default Projects;
