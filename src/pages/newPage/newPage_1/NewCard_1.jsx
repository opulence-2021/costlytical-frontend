import React from "react";
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
import succsess from "../../../images/succsess.gif";

const NewCard_1 = () => {
  //Project name
  const projectName = "Infusion Pump v1";

  //Model details this is an example. data should be fetched using API request, useEffect, useState, Axios.
  const models = [
    {
      modelNumber: 1,
      modelName: "Base v2",
      material: "PLA+",
      layerHeight: "0.28mm",
      quantity: "1",
    },
    {
      modelNumber: 2,
      modelName: "Stepper motor holder",
      material: "PETG",
      layerHeight: "0.28mm",
      quantity: "1",
    },
    {
      modelNumber: 3,
      modelName: "Arduino cover v3",
      material: "PLA+",
      layerHeight: "0.28mm",
      quantity: "1",
    },
  ];

  //Number of models
  const noOfModels = models.length;
  const subHeading = `Number of models: ${noOfModels}`;

  const history = useHistory();

  //handling back button press
  const handdlBackClick = () => {
    //validate if needed
    if (window.confirm("All entered details will be lost!")) {
      history.push("/new");
    }
  };

  //handling Resquest button press
  const handdlRequestClick = () => {
    //validate inputs and API request to upload settings, confirmation?
    document.querySelector("#overlay").style.display = "initial";
    document.querySelector("#confirmBox").style.display = "initial";
  };

  //handling okay button press in pop-up
  const handdlOkayClick = () => {
    //validate inputs and API request to upload settings, confirmation?
    document.querySelector("#overlay").style.display = "none";
    document.querySelector("#confirmBox").style.display = "none";
    history.push("/home");
  };

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
        <ProgressBar />
      </div>
      <div id="tableHeader">
        <TableHeader />
      </div>
      <div id="models">
        {models &&
          models.map((model) => {
            const { modelNumber, modelName, material, layerHeight, quantity } =
              model;
            return (
              <ModelDetails
                model_Number={modelNumber}
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
      {/* Confirmation popup */}
      <div id="confirmBox">
        <div id="confirmBoxContent">
          <div id="tickImage_1">
            <img src={succsess} alt="succsess" id="tickImage" />
          </div>
          <div id="textbar">
            <h3>Estimate request submitted successfully</h3>
          </div>
          <div id="okayBtn" div onClick={() => handdlOkayClick()}>
            <CustomButton buttonName="Okay" />
          </div>
        </div>
      </div>
      {/* opacity overlay */}
      <div id="overlay"></div>
    </div>
  );
};

export default NewCard_1;
