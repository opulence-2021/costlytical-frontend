import React from "react";
// Styles
import './PendingConfirmation.css'
// Components
import NewSideBar from "../newPage/NewSideBar";
import Table from '../../components/Table'
const PendingConfirmation = () => {
  const list = [{ estimateNo: "CE-003", date: "01/02/2022", projectName: "Stationary Set", noOfModel: "05", totalCost: "2,500" },
  { estimateNo: "CE-002", date: "02/03/2022", projectName: "Infusion Pump", noOfModel: "06", totalCost: "5,500" }]
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
