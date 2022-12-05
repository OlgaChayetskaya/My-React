import React from "react";
import Card from "../../UI/Card";

const ProjectItemBody = (props) => {
  return (
    <Card className="project-item_body">
      <p>{props.currProjDesc}</p>
    </Card>
  );
};

export default ProjectItemBody;
