import Card from "../UI/Card";
import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <Card className="project-item">
      <div className="project-item__description">
        <h2>{props.projName}</h2>
        <div className="project-year">{props.year}</div>
        <div className="project-item__customer">{props.customer}</div>
      </div>
    </Card>
  );
}

export default ProjectItem;
