import React from "react";
// Styles
import "./PendingConfirmation.css";
// Components
import SideBarPending from "./SideBarPending";
import Table from "../../components/Table";
const PendingConfirmation = () => {
  const list = [
    {
      projectId: "CE-003",
      date: "01/02/2022",
      projectName: "Stationary Set",
      noOfModel: "05",
      totalCost: "2,500",
    },
    {
      projectId: "CE-002",
      date: "02/03/2022",
      projectName: "Infusion Pump",
      noOfModel: "06",
      totalCost: "5,500",
    },
  ];
  return (
    <div className="container">
      <div className="nav">
        <SideBarPending />
      </div>
      <div className="container__pending">
        <h1 className="container__pending__title">
          Project Pending Confirmation
        </h1>
        <div className="container__table">
          <Table list={list} />
        </div>
      </div>
    </div>
  );
};

export default PendingConfirmation;
