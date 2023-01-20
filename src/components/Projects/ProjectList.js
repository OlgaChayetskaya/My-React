import React, { Fragment } from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import ReadModeBlock from "../Layout/ReadModeBlock";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./ProjectList.css";

const ProjectList = (props) => {
  const deleteHandler = () => {
    const filteredProjects = props.items.filter(
      (item) => item.styled === false
    );
    props.onItemsDelete(filteredProjects);
  };
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
  return (
    <Fragment>
      <Card className="projects">
        <ReadModeBlock
          readMode={props.readMode}
          onReadModeChange={props.onReadModeChange}
        />
        <Button type="button" onClick={deleteHandler}>
          Delete selected cards.
        </Button>
        <ul className="project-list">{projectsList}</ul>;
      </Card>
    </Fragment>
  );
};

export default ProjectList;
