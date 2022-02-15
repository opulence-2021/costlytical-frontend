import React from "react";
import "./TableHeader.css";

const TableHeader = () => {
  return (
    <div id="headingContainer">
      <div class="heading">
        <h3>Model Number</h3>
      </div>
      <div class="heading">
        <h3>Model Name</h3>
      </div>
      <div class="heading">
        <h3>Material</h3>
      </div>
      <div class="heading">
        <h3>Layer Height</h3>
      </div>
      <div class="heading">
        <h3>Quantity</h3>
      </div>
    </div>
  );
};

export default TableHeader;
