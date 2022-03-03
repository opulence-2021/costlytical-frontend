import React from "react";
//styles
import "./SignInTextField.css";

const TextFieldSignIn = (props) => {
  const { labelname, placeholderText, getData } = props;
  return (
    <div id="SignintextFiled">
      <label for="name" id="textBoxLabelSignin">
        {labelname}{" "}
      </label>
      <br />
      <input
        type="text"
        name="name"
        id="nameFieldSignin"
        onChange={() => getData(document.getElementById("nameFieldSignin").value)}
        placeholder={placeholderText}
      ></input>
    </div>
  );
};

export default TextFieldSignIn;
