import React from "react";
//styles
import "./TextArea.css";

const TextArea = (props) => {
  const { labelname, placeholderText } = props;
  return (
    <div id="textArea">
      <label for="name" id="textAreaLabel">
        {labelname}{" "}
      </label>
      <br />
      <textArea
        name="name"
        id="nameFiled"
        placeholder={placeholderText}
        rows="2"
      ></textArea>
    </div>
  );
};

export default TextArea;
