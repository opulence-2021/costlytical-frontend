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

  //handling next button press
  const handdlNextClick = () => {
    //validate file upload
    // alert("pressed next btn");
    history.push("/new/request");
  };

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
