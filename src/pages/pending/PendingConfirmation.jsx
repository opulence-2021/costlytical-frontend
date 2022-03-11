import React from "react";
// Styles
import './PendingConfirmation.css'
// Components
import NewSideBar from "../newPage/NewSideBar";
import Table from '../../components/Table'
const PendingConfirmation = () => {
  const list = [{ estimateNo: "CE-003", date: "01/02/2022", projectName: "StationarySet", noOfModel: "05", totalCost: "2,500" }]
  return (
    <div className="container">
      <div className="nav">
        <NewSideBar />
      </div>
      <div className="container__body">
        <h1 className="container__body__title">Project Pending Confirmation</h1>
        <div className="container__table">
          <Table list={list} />
        </div>
      </div>
    </div>
  );
};

export default PendingConfirmation;
