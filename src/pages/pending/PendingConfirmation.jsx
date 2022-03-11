import React from "react";
// Styles
import './PendingConfirmation.css'
// Components
import NewSideBar from "../newPage/NewSideBar";

const PendingConfirmation = () => {
  return (
    <div className="container">
      <div className="nav">
        <NewSideBar />
      </div>
      <div className="container__body">
        <h1 className="container__body__title">Project Pending Confirmation</h1>
      </div>
    </div>
  );
};

export default PendingConfirmation;
