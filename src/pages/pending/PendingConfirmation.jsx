import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../api";
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./PendingConfirmation.css";
// Components
import SideBarPending from "./SideBarPending";
import Table from "../../components/Table";
const PendingConfirmation = () => {
  const history = useHistory();
  const [userId, setUserId] = useState();
  const [projects, setProjects] = useState([
    {
      _id: "Sample ID",
      projectCreatedAt: "12/12/2012",
      projectName: "Sample project name",
      projectTotalCost: "0",
    },
  ]);

  //method to get data from the backend
  useEffect(() => {
    if (sessionStorage.length === 0) {
      history.push("/login");
    } else {
      const user = JSON.parse(sessionStorage.user);
      let { _id } = user;
      setUserId(_id);

      //calling the backend to get project details
      try {
        axios
          .get(
            `${API_URL}/projects/projectStatus?userID=${_id}&ProjectStatus=pending confirmation`
          )
          .then((res) => {
            const responseProjects = res.data;
            setProjects(responseProjects);
            setPendingProjectData(responseProjects);
          })
          .catch(function (error) {
            if (error.response.status === 400) {
              Swal.fire(
                "Oops..., there was a problem",
                "Enter a valid user ID",
                "error"
              );
            } else if (error.response.status === 404) {
              Swal.fire(
                "Oops..., there was a problem",
                "Cannot find the requested resource",
                "error"
              );
            }
          });
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Oops..., there was a problem",
          "There was problem with the server",
          "error"
        );
      }
    }
  }, []);

  //sets the pending project details to the session storage
  function setPendingProjectData(ProjectData) {
    sessionStorage.setItem("PendingProjects", JSON.stringify(ProjectData));
  }

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
          <Table list={projects} />
        </div>
      </div>
    </div>
  );
};

export default PendingConfirmation;
