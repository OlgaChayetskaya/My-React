import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import "./ProjectList.css";

const ProjectList = (props) => {
  const projectsList = props.items.map((project) => (
    <ProjectItem
      key={project.id}
      projName={project.projName}
      customer={project.customer}
      year={project.year}
      projDesc={project.projDesc}
      readModeState={props.readMode}
      editModeState={false}
    />
  ));

  return <ul className="project-list">{projectsList}</ul>;
};

export default ProjectList;
