import React from "react";
//styles
import "./LongButton.css";

const LongButton = (props) => {
  const buttonName = props.buttonName;

  return (
    <div id="longButton">
      <div id="text">{buttonName}</div>
    </div>
  );
};

export default LongButton;
