import React, { useEffect, useState } from "react";

import { FiSave } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";

import Card from "../../UI/Card";

import "./ProjectItem.css";

const EditMode = (props) => {
  const [updProjName, setUpdProjName] = useState(props.projName);
  const [updProjDesc, setUpdProjDesc] = useState(props.projDesc);

  useEffect(() => {
    if (props.readModeState) {
      props.onStopEdit(props.projName, props.projDesc);
    }
  }, [props.readModeState]);

  const changeProjNameHandler = (event) => {
    setUpdProjName(event.target.value);
  };
  const changeProjDescHandler = (event) => {
    setUpdProjDesc(event.target.value);
  };

  const changeSaveHandler = () => {
    props.onStopEdit(updProjName, updProjDesc);
  };
  const changeCancelHandler = () => {
    props.onStopEdit(props.projName, props.projDesc);
  };

  return (
    <Card className="project-item">
      <Card className="project-item_header">
        <div className="project-item__description">
          <div className="project-item__customer">{props.customer}</div>
          <input
            type="text"
            value={updProjName}
            onChange={changeProjNameHandler}
          />
          <div className="project-year">{props.year}</div>
          <div>
            <FiSave color="white" onClick={changeSaveHandler} />
            <GiCancel color="white" onClick={changeCancelHandler} />
          </div>
        </div>
      </Card>
      <Card className="project-item_body">
        <input
          type="text"
          value={updProjDesc}
          onChange={changeProjDescHandler}
        />
      </Card>
    </Card>
  );
};
export default EditMode;
