import React from "react";
//styles
import "./SignInTextField.css";

const TextFieldSignIn = (props) => {
  const { labelname, placeholderText, getData, textFieldID } = props;
  return (
    <div id="SignintextFiled">
      <label htmlFor="name" id="textBoxLabelSignin">
        {labelname}{" "}
      </label>
      <br />
      <input
        type="text"
        name="name"
        id={textFieldID}
        className="CustomtextField"
        onChange={() => getData(document.getElementById(textFieldID).value)}
        placeholder={placeholderText}
      ></input>
    </div>
  );
};

export default TextFieldSignIn;
