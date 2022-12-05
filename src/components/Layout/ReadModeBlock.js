import React from "react";

import Card from "../UI/Card";
import CheckBox from "../UI/CheckBox";
import Button from "../UI/Button";

const ReadModeBlock = (props) => {
  const readModeChBHandler = () => {
    props.onReadModeChange(props.readMode);
  };
  const removeHandler = () => {
    console.log("Add later");
  };
  return (
    <Card className="projects__caption">
      <div>
        <CheckBox
          type="checkbox"
          checked={props.readMode}
          onChange={readModeChBHandler}
        />
        <label>Read mode only! </label>
      </div>
      <Button label="Delete selected cards." onClick={removeHandler}></Button>
    </Card>
  );
};

export default ReadModeBlock;
