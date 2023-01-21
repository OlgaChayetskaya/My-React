import React from "react";

import Card from "../UI/Card";
import CheckBox from "../UI/CheckBox";
import "./ReadModeBlock.css";

const ReadModeBlock = (props) => {
  const readModeChBHandler = () => {
    props.onReadModeChange(props.readMode);
  };

  return (
    <Card className="read-block">
      <div>
        <CheckBox
          type="checkbox"
          checked={props.readMode}
          onChange={readModeChBHandler}
        />
        <label>Read mode only! </label>
      </div>
    </Card>
  );
};

export default ReadModeBlock;
