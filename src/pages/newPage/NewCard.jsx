import React from "react";
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./NewCard.css";
// Components
import PageHeading from "../../components/PageHeading";
import ProgressBar from "../../components/ProgressBar";
import TextFiled from "../../components/TextFiled";
import CustomButton from "../../components/CustomButton";
import FileUpload from "./FileUpload";
//images
import projectImage from "../../storyImages/project.svg";

const NewCard = () => {
  const history = useHistory();
  let projectName = "project";

  //handling create project click
  const handdleProjectClick = () => {
    //validate project name //sweet alert
    // using axios call the backend's create project method with userId and entered project_name.
    //server will return the created projectId save it to the session storage.
    //display alert for any error
    document.getElementById("initialContent").style.display = "none";
    document.getElementById("secodaryContent").style.display = "initial";
  };
  //handling next button press
  const handdleNextClick = () => {
    //validate file upload
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
      {/* components for get project name */}
      <div id="initialContent">
        <div id="getProjectName">
          <div id="createProject">
            <div id="projectName">
              <TextFiled
                labelname="Give your awsome project a name"
                placeholderText="Awsome project"
                getData={getProjectName}
              />
              <div id="createProjectBtn" onClick={() => handdleProjectClick()}>
                <CustomButton buttonName="Create Project" />
              </div>
            </div>
          </div>
          <div id="projectImage">
            <img src={projectImage} alt="project naming" id="projectNameImg" />
          </div>
        </div>
      </div>
      {/* components for File upload */}
      <div id="secodaryContent">
        <div id="fileUploadSpace">
          <FileUpload />
        </div>
        <div id="nextBtn" onClick={() => handdleNextClick()}>
          <CustomButton buttonName="Next" />
        </div>
      </div>
    </div>
  );
};

export default NewCard;
