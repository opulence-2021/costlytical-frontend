import React from "react";
import "./ModelDetails.css";

//should use useState at component close to backup selected and modified parameters settings to the server.

const ModelDetails = (props) => {
  //Material details this is an example. data should be fetched using API request, useEffect, useState, Axios.
  let material = ["PLA+", "ABS+", "PETG", "TPU"];

  const {
    model_Number,
    model_Name,
    model_material,
    model_layerHeight,
    model_quantity,
  } = props;

  //method to update layer height
  function UpdateLayerHeight(event) {
    event.preventDefault();
    let modelDetails = JSON.parse(sessionStorage.NewModels);
    let targetIndex = modelDetails.findIndex((x) => x._id === model_Number);
    modelDetails[targetIndex]["layerHeight"] = Number(event.target.value);
    //updating session storage
    sessionStorage.setItem("NewModels", JSON.stringify(modelDetails));
  }

  //method to update material
  function UpdateMaterial(event) {
    event.preventDefault();
    let modelDetails = JSON.parse(sessionStorage.NewModels);
    let targetIndex = modelDetails.findIndex((x) => x._id === model_Number);
    modelDetails[targetIndex]["materialName"] = event.target.value;
    //updating session storage
    sessionStorage.setItem("NewModels", JSON.stringify(modelDetails));
  }

  //method to update quantity
  function UpdateQuantity(event) {
    event.preventDefault();
    let modelDetails = JSON.parse(sessionStorage.NewModels);
    let targetIndex = modelDetails.findIndex((x) => x._id === model_Number);
    modelDetails[targetIndex]["modelQuantity"] = Number(event.target.value);
    //updating session storage
    sessionStorage.setItem("NewModels", JSON.stringify(modelDetails));
  }

  return (
    <div id="modelContainer">
      <div class="modelItem">
        <h4>{model_Number.slice(8, 24)}</h4>
      </div>
      <div class="modelItem">
        <h4>{model_Name}</h4>
      </div>
      <div class="modelItem">
        <select id="materialSelect" onChange={(e) => UpdateMaterial(e)}>
          {material &&
            material.map((materialName) => {
              return <option value={materialName}>{materialName}</option>;
            })}
        </select>
      </div>
      <div class="modelItem">
        <select id="layerSelect" onChange={(e) => UpdateLayerHeight(e)}>
          <option value="0.28">0.28mm</option>
          <option value="0.2">0.20mm</option>
          <option value="0.12">0.12mm</option>
          {/* <option value="AUTO">AUTO</option> */}
        </select>
      </div>
      <div class="modelItem">
        <input
          type="number"
          id="quantitySelect"
          min="1"
          max="1000"
          step="1"
          defaultValue="1"
          onChange={(e) => UpdateQuantity(e)}
        />
      </div>
    </div>
  );
};

export default ModelDetails;
