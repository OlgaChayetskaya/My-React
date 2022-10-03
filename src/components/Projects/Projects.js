import React, { useState } from "react";

import ProjectItem from "./ProjectItem";
import Card from "../UI/Card";

import "./Projects.css";

function Projects(props) {
  const [isChecked, setIsChecked] = useState(false);

  const changeStateHandler = (event) => {
    setIsChecked(!isChecked);return;
  };
  //console.log('Is "My Value" checked?' + isChecked);
  return (
    <div className="projects">
      <Card className={`project-item ${isChecked ? 'barbie':''}`}>
        <div className={`project-item__description ${isChecked ? 'barbie':''}`}>
          <h2>List of my Projects</h2>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={changeStateHandler}
            />
            Barbie style
          </label>
        </div>
      </Card>

      <ProjectItem
        projName={props.items[0].projName}
        customer={props.items[0].customer}
        year={props.items[0].year}
        checkBoxState={isChecked}
      />
      <ProjectItem
        projName={props.items[1].projName}
        customer={props.items[1].customer}
        year={props.items[1].year}
        checkBoxState={isChecked}
      />
      <ProjectItem
        projName={props.items[2].projName}
        customer={props.items[2].customer}
        year={props.items[2].year}
        checkBoxState={isChecked}
      />
      <ProjectItem
        projName={props.items[3].projName}
        customer={props.items[3].customer}
        year={props.items[3].year}
        checkBoxState={isChecked}
      />
    </div>
  );
}

export default Projects;
