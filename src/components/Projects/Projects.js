import React, { Fragment } from "react";
import ReadModeBlock from "../Layout/ReadModeBlock";
import ProjectList from "./ProjectList";
import Card from "../UI/Card";
import Button from "../UI/Button";

import "./Projects.css";

const Projects = (props) => {
  const deleteHandler = () => {
    props.onItemsDelete(true);
  };
  return (
    <Fragment>
      <Card className="projects">
        <ReadModeBlock
          readMode={props.readMode}
          onReadModeChange={props.onReadModeChange}
        />
        <Button onClick={deleteHandler}>{"Delete selected cards."} </Button>
        <ProjectList
          items={props.items}
          readMode={props.readMode}
          onItemEdit={props.onItemEdit}
          onItemStyled={props.onItemStyled}
        />
      </Card>
    </Fragment>
  );
};

export default Projects;
