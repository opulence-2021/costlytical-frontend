import React from "react";
//styles
import "./TextFiled.css";

const TextFiled = (props) => {
  const { labelname, placeholderText, getData } = props;
  return (
    <div id="textFiled">
      <label for="name" id="textBoxLabel">
        {labelname}{" "}
      </label>
      <br />
      <input
        type="text"
        name="name"
        id="nameFiled"
        onChange={() => getData(document.getElementById("nameFiled").value)}
        placeholder={placeholderText}
      ></input>
    </div>
  );
};

export default TextFiled;
