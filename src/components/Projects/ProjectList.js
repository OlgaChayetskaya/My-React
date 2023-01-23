import React, { Fragment } from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import ReadModeBlock from "../Layout/ReadModeBlock";
import Card from "../UI/Card";
import Button from "../UI/Button";
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
  return (
    <Fragment>
      <Card className="projects">
        <ReadModeBlock
          readMode={props.readMode}
          onReadModeChange={props.onReadModeChange}
        />
        <div className="projects-actions">
          <Button type="button" onClick={props.onItemsDelete}>
            Delete selected cards.
          </Button>
        </div>

        <div>
          <ul className="project-list">{projectsList}</ul>;
        </div>
      </Card>
    </Fragment>
  );
};

export default ProjectList;
