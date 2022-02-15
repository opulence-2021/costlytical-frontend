import React from "react";
//styles
import "./CustomButton.css";

const CustomButton = (props) => {
  const buttonName = props.buttonName;

  return (
    <div id="customButton">
      <div id="text">{buttonName}</div>
    </div>
  );
};

export default CustomButton;
