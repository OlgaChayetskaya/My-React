import Card from "../UI/Card";
import "./ProjectItem.css";

function ProjectItem(props) {
  
  return (
    <Card className={`project-item ${props.checkBoxState ? 'barbie':''}`}>
      <div className={`project-item__description ${props.checkBoxState ? 'barbie':''}`}>
        <h2>{props.projName}</h2>        
        <div className={`project-year ${props.checkBoxState ? 'barbie':''}`}>{props.year}</div>
        <div className={`project-item__customer ${props.checkBoxState ? 'barbie':''}`}>{props.customer}</div>
      </div>      
    </Card>
  );
}

export default ProjectItem;
