import React from "react";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import PreBar from "./PreBar";
// Styles
// Components

const PreviousProjects = () => {
  return (
    <div className="container">
      <div className="nav">
        <PreBar />
      </div>
      <div className="container__pending">
        <h1 className="container__pending__title">Previous Projects</h1>
        <div className="container__table">
          <ProjectsGrid />
          {/* <Table list={list} /> */}
        </div>
      </div>
    </div>
  );
};

export default PreviousProjects;
