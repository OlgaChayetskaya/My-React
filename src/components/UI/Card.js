import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};
Card.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onSaveNewProject: PropTypes.func,
  onCancelNewProject: PropTypes.func,
  readModeState: PropTypes.bool,
  onStopEdit: PropTypes.func,
  projName: PropTypes.string,
  projDesc: PropTypes.string,
  customer: PropTypes.string,
  year: PropTypes.string,
  editMode: PropTypes.bool,
  isStyleChBxChecked: PropTypes.bool,
  onChangeStyle: PropTypes.func,
  onPensilChange: PropTypes.func,
  readMode: PropTypes.bool,
  onReadModeChange: PropTypes.func,
  key: PropTypes.string,
  id: PropTypes.string,
  styled: PropTypes.bool,
  editModeState: PropTypes.bool,
};

export default Card;
