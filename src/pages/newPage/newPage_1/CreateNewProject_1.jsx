import React from "react";
// Styles
import "./CreateNewProject_1.css";
// Components
import NewSideBar from "../NewSideBar";
import NewCard from "./NewCard_1";

const CreateNewProject_1 = () => {
  return (
    <div className="newPage_1">
      <div id="newSideBar">
        <NewSideBar />
      </div>
      <div id="cardBackground_new_page_Two">
        <NewCard />
      </div>
    </div>
  );
};

export default CreateNewProject_1;
