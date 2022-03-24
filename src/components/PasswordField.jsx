import React from "react";
//styles
import "./PasswordField.css";

const PasswordField = (props) => {
  const { labelname, placeholderText, getData, textFieldID } = props;
  return (
    <div id="passwordField">
      <label for="name" id="passwordLabel">
        {labelname}{" "}
      </label>
      <br />
      <input
        type="password"
        name="name"
        id={textFieldID}
        className="passwordField"
        onChange={() => getData(document.getElementById(textFieldID).value)}
        placeholder={placeholderText}
      ></input>
    </div>
  );
};

export default PasswordField;
