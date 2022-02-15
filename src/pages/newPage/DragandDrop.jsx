import React, { useRef } from "react";
import CustomButton from "../../components/CustomButton";
import "./DragandDrop.css";
import upload from "../../storyImages/upload.svg";

const DragandDrop = () => {
  //function to open the file explore
  const handdleBrowseClick = () => {
    //validate file upload
    inputFile.current.click();
  };

  const inputFile = useRef(null);

  return (
    <div id="dopBox">
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <div id="leftText">
        <p id="rowOne">Drag And Drop Your Models Here</p>
        <p id="rowTwo">OR</p>
        <div id="browseBtn" div onClick={() => handdleBrowseClick()}>
          <CustomButton buttonName="Browse Files" />
        </div>
        <p id="rowThree">Supported file type: STL</p>
      </div>
      <div id="rightImage">
        <img src={upload} alt="uploading to the cloud" id="backgroundImage" />
      </div>
    </div>
  );
};

export default DragandDrop;
