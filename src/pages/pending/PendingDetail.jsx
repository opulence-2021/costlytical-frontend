import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../api";
//Routing
import { useHistory } from "react-router-dom";
//styles
import "./PendingDetail.css";
//Components
import TableDetail from "../../components/TableDetail";
import SideBarPending from "./SideBarPending";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

const PendingDetail = () => {
  const history = useHistory();
  const [thisProject, setThisProject] = useState({
    _id: "Sample ID 1233343454587349585",
    projectCreatedAt: "12/12/2012",
    projectName: "Sample project name",
    projectTotalCost: "0",
    userId: "621d0b4662676d59d5148f91",
  });
  const path = window.location.pathname.slice(
    window.location.pathname.length - 24,
    window.location.pathname.length
  );

  const [models, setModels] = useState([
    {
      modelName: "Sample project name",
      materialName: "PLA+",
      layerHeight: 0.28,
      subTotal: 0,
      modelQuantity: 1,
      lineTotal: 0,
      printabilityScore: 100,
    },
  ]);

  //method to get model data from the backend
  useEffect(() => {
    if (sessionStorage.length === 0) {
      history.push("/login");
    } else {
      //calling the backend to get model details
      try {
        axios
          .get(`${API_URL}/models/getModels?projectID=${path}`)
          .then((res) => {
            const responseModels = res.data;
            setModels(responseModels);
            setProjectDetails();
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

  //method to set project details
  function setProjectDetails() {
    const projects = JSON.parse(sessionStorage.PendingProjects);
    let Project = projects.find(({ _id }) => _id === path);
    setThisProject(Project);
  }

  //method to handle confirm button click
  const handleConfirm = () => {
    Swal.fire("Success!", "Order Request Submitted!", "success");
  };

  //method to handle decline button click
  const handleDecline = () => {
    Swal.fire({
      icon: "error",
      title: "Declined",
      text: "Order Declined!",
    });
  };

  return (
    <div className="container">
      <div className="container__one">
        <div className="nav">
          <SideBarPending />
        </div>
        <div className="container__body">
          <div className="container__body__title">
            <div>
              <h1>
                <b>{thisProject.projectName}</b>
              </h1>
              <p className="title__created">
                <b>Created By:</b> {thisProject.userId.slice(16, 24)}
              </p>
            </div>
            <div className="title__estimated">
              <h1>
                <b>Project Id:</b> {thisProject._id.slice(8, 24)}
              </h1>
            </div>
            <div>
              <h1 className="title__value">
                <b>Total Value: </b>Rs. {thisProject.projectTotalCost}
              </h1>
            </div>
          </div>
          <div className="table__body">
            <TableDetail list={models} />
          </div>
          <div className="container__decline">
            <button onClick={handleDecline} className="button__decline">
              Decline Offer
            </button>
          </div>
          <div className="container__delivery">
            <div className="box__store">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Store pick-up"
              />
            </div>
            <div className="box__input">
              <div className="box__option">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Order delivered to your location"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Use address in the Profile"
                />
              </div>
              <h3 className="title__location">Location</h3>
              <TextField
                sx={{ marginRight: 4 }}
                id="addressLine1"
                label="Address Line 1"
                variant="standard"
              />
              <TextField
                sx={{ marginRight: 4 }}
                id="addressLine2"
                label="Address Line 2"
                variant="standard"
              />
              <TextField
                sx={{ marginRight: 4 }}
                id="city"
                label="City"
                variant="standard"
              />
              <TextField
                sx={{ marginRight: 4 }}
                id="country"
                label="Country"
                variant="standard"
              />
            </div>
            <div className="container__confirm">
              <button onClick={() => handleConfirm()} className="btn__confirm">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PendingDetail;
