import React from "react";

import ProjectItem from "./ProjectItem";
//import Card from "../UI/Card";

import "./Projects.css";

function Projects(props) {
  return (
    <div className="projects">
      {/* <Card className="project-item">
        <div className="project-item__description">
          <h2>List of my Projects</h2>
        </div>
      </Card> */}

      <ProjectItem
        projName={props.items[0].projName}
        customer={props.items[0].customer}
        year={props.items[0].year}
        projDesc={props.items[0].projDesc}
      />
      <ProjectItem
        projName={props.items[1].projName}
        customer={props.items[1].customer}
        year={props.items[1].year}
        projDesc={props.items[1].projDesc}

      />
      <ProjectItem
        projName={props.items[2].projName}
        customer={props.items[2].customer}
        year={props.items[2].year}
        projDesc={props.items[2].projDesc}
      />
      <ProjectItem
        projName={props.items[3].projName}
        customer={props.items[3].customer}
        year={props.items[3].year}
        projDesc={props.items[3].projDesc}
      />
    </div>
  );
}

export default Projects;
