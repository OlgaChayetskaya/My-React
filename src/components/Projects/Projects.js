import React, { useState, Fragment } from "react";
import ReadModeBlock from "../Layout/ReadModeBlock";
import ProjectList from "./ProjectList";
import Card from "../UI/Card";

import "./Projects.css";

const Projects = (props) => {
  const [readMode, setReadMode] = useState(true);

  const readModeChangeHandler = (receivedReadMode) => {
    setReadMode(!receivedReadMode);
  };

  return (
    <Fragment>
      <Card className="projects">
        <ReadModeBlock
          readMode={readMode}
          onReadModeChange={readModeChangeHandler}
        />

        <ProjectList items={props.items} readMode={readMode} />
      </Card>
    </Fragment>
  );
};

export default Projects;
