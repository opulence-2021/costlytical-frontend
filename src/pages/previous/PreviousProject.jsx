import React from "react";
import { useParams } from "react-router-dom";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import { get_project } from "../../data/Projects.data";
import PreBar from "./PreBar";

const PreviousProject = () => {
  const { id } = useParams();
  const project = get_project(id);
  console.log("PREVious project");
  if (!project)
    return (
      <div>
        <h1 className="black">No Project found for this id</h1>
      </div>
    );
  return (
    <div className="container">
      <div className="nav">
        <PreBar />
      </div>
      <div className="container__pending" style={{ width: "80vw" }}>
        <div>
          <ProjectHeader {...project} />
        </div>
        <div className="container__table">
          <div className="mt-5">
            {project.items && project.items.length > 0 ? (
              <ItemsGrid items={project.items} />
            ) : (
              <h1 className="black">No Items found for this project</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousProject;
