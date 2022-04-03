import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../api";
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
  let projectName = "";
  const [userId, setUserId] = useState();
  const [projectId, setProjectId] = useState();

  //method to get user ID from session storage
  useEffect(() => {
    if (sessionStorage.length === 0) {
      history.push("/login");
    } else {
      const user = JSON.parse(sessionStorage.user);
      let { _id } = user;
      setUserId(_id);
    }
  }, []);

  //handling create project button click
  const handdleProjectClick = () => {
    // validating project name
    if (projectName === "" || projectName.length < 4) {
      Swal.fire(
        "Please enter the project name!",
        "Your project name must contain at least 5 characters.",
        "warning"
      );
    } else {
      // Save project name to sessionStorage
      sessionStorage.setItem("projectName", projectName);

      // method to create the project using axios to call the backend
      try {
        axios
          .post(
            `${API_URL}/projects/createProject?userID=${userId}&projectname=${projectName}`
          )
          .then((res) => {
            const responseProject = res.data;
            let { _id } = responseProject;
            setProjectId(_id);
            setProjectData(_id);
            handdleFileUpload();
          })
          .catch(function (error) {
            if (error.response.status === 400) {
              Swal.fire(
                "Oops..., there was a problem",
                "Enter a valid project name",
                "error"
              );
            } else if (error.response.status === 409) {
              Swal.fire(
                "Oops..., there was a problem",
                "Request conflict with the current state of the target resource",
                "error"
              );
            }
          });
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Oops..., there was a problem",
          "There was problem with the server",
          "error"
        );
      }
    }
  };

  // method to handdle file upload functions
  function handdleFileUpload() {
    document.getElementById("initialContent").style.display = "none";
    document.getElementById("secodaryContent").style.display = "initial";
  }

  //sets the project name to the session
  function setProjectData(projectID) {
    sessionStorage.setItem("projectId", projectID);
  }

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
          <FileUpload customerId={userId} ProjectId={projectId} />
        </div>
      </div>
    </div>
  );
};

export default NewCard;
