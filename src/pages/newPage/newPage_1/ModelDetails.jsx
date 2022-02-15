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

  return (
    <div id="modelContainer">
      <div class="modelItem">
        <h4>{model_Number}</h4>
      </div>
      <div class="modelItem">
        <h4>{model_Name}</h4>
      </div>
      <div class="modelItem">
        <select id="materialSelect">
          {material &&
            material.map((materialName) => {
              return <option value={materialName}>{materialName}</option>;
            })}
        </select>
      </div>
      <div class="modelItem">
        <select id="layerSelect">
          <option value="0.28mm">0.28mm</option>
          <option value="0.20mm">0.20mm</option>
          <option value="0.12mm">0.12mm</option>
          <option value="AUTO">AUTO</option>
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
        />
      </div>
    </div>
  );
};

export default ModelDetails;
