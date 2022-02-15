import React from "react";
// Styles
import "./CreateNewProject.css";
// Components
import NewSideBar from "./NewSideBar";
import NewCard from "./NewCard";

const CreateNewProject = () => {
  return (
    <div className="newPage">
      <div id="newSideBar">
        <NewSideBar />
      </div>
      <div id="cardBackground">
        <NewCard />
      </div>
    </div>
  );
};

export default CreateNewProject;
