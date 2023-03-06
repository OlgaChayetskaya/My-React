import React, { Fragment } from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import ReadModeBlock from "../Layout/ReadModeBlock";
import Card from "../UI/Card";
import Button from "../UI/Button";
import withLoadingDelay from "../HOC/withLoadingDelay";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../../store/projects-slice";

import "./ProjectList.css";

const ProjectItemWithLoadingDelay = withLoadingDelay(ProjectItem);

const ProjectList = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.projects.items);

  const projectsList = items.map((project) => (
    <ProjectItemWithLoadingDelay
      key={project.id}
      id={project.id}
      projName={project.projName}
      customer={project.customer}
      year={project.year}
      projDesc={project.projDesc}
      styled={project.styled}
      editModeState={false}
      readModeState={props.readMode}
    />
  ));

  const removeProjectsHandler = () => {
    dispatch(projectsActions.itemsDelete());
  };

  return (
    <Fragment>
      <Card className="projects">
        <ReadModeBlock
          readMode={props.readMode}
          onReadModeChange={props.onReadModeChange}
        />
        <div className="projects-actions">
          <Button type="button" onClick={removeProjectsHandler}>
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
