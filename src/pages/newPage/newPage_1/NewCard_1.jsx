import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../../api";
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./NewCard_1.css";
// Components
import PageHeading from "../../../components/PageHeading";
import PageSubHeading from "../../../components/PageSubHeading";
import ProgressBar from "../../../components/ProgressBar";
import TableHeader from "./TableHeader";
import ModelDetails from "./ModelDetails";
import TextArea from "../../../components/TextArea";
import CustomButton from "../../../components/CustomButton";

const NewCard_1 = () => {
  //constants
  const history = useHistory();
  const [projectId, setProjectId] = useState();
  const [projectName, setProjectName] = useState("Project Name");
  const [models, setModels] = useState();
  const [subHeading, setSubHeading] = useState("Number of models");
  const [stepperStep, setStepperStep] = useState(2);

  //method to get model details from the database
  useEffect(() => {
    if (sessionStorage.length < 2) {
      history.push("/login");
    } else {
      const projectID = sessionStorage.getItem("projectId");
      setProjectId((currentProjectId) => projectID);
      const ProjectNAme = sessionStorage.getItem("projectName");
      setProjectName(ProjectNAme);

      try {
        axios
          .get(`${API_URL}/models/getModels?projectID=${projectID}`)
          .then((res) => {
            const responseModels = res.data;
            setModels(responseModels);
            setModelDetails(responseModels);
            let numberOfModels = models.length;
            setSubHeading(`Number of models: ${numberOfModels}`);
          })
          .catch(function (error) {
            if (error.response.status === 404) {
              Swal.fire(
                "Oops..., there was a problem",
                "Server cannot find the requested resource",
                "error"
              );
            } else if (error.response.status === 400) {
              Swal.fire(
                "Oops..., there was a problem",
                "Invalid project ID",
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
  }, []);

  //sets the model details to the session storage
  function setModelDetails(modelData) {
    sessionStorage.setItem("NewModels", JSON.stringify(modelData));
    setStepperStep(3);
  }

  //handling back button press
  const handdlBackClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "All entered details will be lost!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/new");
      }
    });
  };

  //handling Resquest button press
  const handdlRequestClick = async () => {
    setStepperStep(4);
    // method to update model print details using axios to call the backend
    try {
      let modelContent = JSON.parse(sessionStorage.NewModels);
      const config = { headers: { "Content-Type": "application/json" } };
      axios
        .put(
          `${API_URL}/models/updateModels?projectID=${projectId}`,
          modelContent,
          config
        )
        .then(async (res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Order request submitted successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          //method call to generate cost
          generateProjectCost();

          // method to move user to home page
          setTimeout(() => history.push("/home"), 2000);
        })
        .catch(function (error) {
          if (error.response.status === 400) {
            Swal.fire(
              "Oops..., there was a problem",
              "Enter a valid project name",
              "error"
            );
          } else if (error.response.status === 404) {
            Swal.fire(
              "Oops..., there was a problem",
              "Server cannot find the requested resource",
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
  };

  //function to initiate generate cost method
  function generateProjectCost() {
    try {
      axios
        .post(`${API_URL}/generateCost?projectID=${projectId}`)

        .then((res) => {})

        .catch(function (error) {
          if (error.response.status === 400) {
            Swal.fire(
              "Oops..., there was a problem",
              "An error occured while slicing",
              "error"
            );
          } else if (error.response.status === 404) {
            Swal.fire(
              "Oops..., there was a problem",
              "Server cannot find the requested resource",
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

  return (
    <div id="cardBackground_1">
      {/* content of the page comes here */}
      <div id="pageHeading">
        <PageHeading pagename={projectName} />
      </div>
      <div id="PageSubHeading">
        <PageSubHeading subHeading={subHeading} />
      </div>
      <div id="progressBar">
        <ProgressBar currentStep={stepperStep} />
      </div>
      <div id="tableHeader">
        <TableHeader />
      </div>
      <div id="models">
        {models &&
          models.map((model) => {
            const { _id, modelName, material, layerHeight, quantity } = model;
            return (
              <ModelDetails
                model_Number={_id}
                model_Name={modelName}
                model_material={material}
                model_layerHeight={layerHeight}
                model_quantity={quantity}
              />
            );
          })}
      </div>
      <div id="textArea">
        <TextArea
          labelname="Add your questions and comments"
          placeholderText="Sample comment"
        />
      </div>
      <div id="buttonContainer">
        <div id="backBtn" div onClick={() => handdlBackClick()}>
          <CustomButton buttonName="Back" />
        </div>
        <div id="placeBtn" div onClick={() => handdlRequestClick()}>
          <CustomButton buttonName="Place Request" />
        </div>
      </div>
    </div>
  );
};

export default NewCard_1;
