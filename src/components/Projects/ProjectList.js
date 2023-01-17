import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import "./ProjectList.css";

const ProjectList = (props) => {
  const projectsList = props.items.map((project) => (
    <ProjectItem
      key={project.id}
      id={project.id}
      projName={project.projName}
      customer={project.customer}
      year={project.year}
      projDesc={project.projDesc}
      styled={project.styled}
      editModeState={false}
      readModeState={props.readMode}
      onItemEdit={props.onItemEdit}
      onItemStyled={props.onItemStyled}
    />
  ));
  return <ul className="project-list">{projectsList}</ul>;
};

export default ProjectList;
