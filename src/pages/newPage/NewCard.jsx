import React from "react";
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./NewCard.css";
// Components
import PageHeading from "../../components/PageHeading";
import ProgressBar from "../../components/ProgressBar";
import TextFiled from "../../components/TextFiled";
import DragandDrop from "./DragandDrop";
import CustomButton from "../../components/CustomButton";

const NewCard = () => {
  const history = useHistory();
  let projectName = "project";

  //handling next button press
  const handdlNextClick = () => {
    //validate file upload
    // alert("pressed next btn");
    history.push("/new/request");
  };

  //geting project name from the text fileld
  function getProjectName(project_name) {
    projectName = project_name;
  }

  return (
    <div id="cardBackground">
      {/* content of the page comes here */}
      <div id="pageHeading">
        <PageHeading pagename="Create New Project" />
      </div>
      <div id="progressBar">
        <ProgressBar />
      </div>
      <div id="projectName">
        <TextFiled
          labelname="Give your awsome project a name"
          placeholderText="Awsome project"
          getData={getProjectName}
        />
      </div>
      <div id="dragandDrop">
        <DragandDrop />
      </div>
      <div id="nextBtn" div onClick={() => handdlNextClick()}>
        <CustomButton buttonName="Next" />
      </div>
    </div>
  );
};

export default NewCard;
