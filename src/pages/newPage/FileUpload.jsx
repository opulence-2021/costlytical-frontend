import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";
import Swal from "sweetalert2";
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./FileUpload.css";
//components
import CustomButton from "../../components/CustomButton";

const FileUpload = (props) => {
  const history = useHistory();
  let modelName = "STL";
  //userId and projectId
  const { customerId, ProjectId } = props;

  const [file, setFile] = useState();
  const [filename, setFileName] = useState("choose file");
  const [uploadedFile, setUploadedFile] = useState();

  //function to make newt button visible
  function showNextButton() {
    document.getElementById("nextBtn").style.display = "initial";
  }

  //handling next button press
  const handdleNextClick = async () => {
    //new
    try {
      const res = await axios
        .post(
          `${API_URL}/models/createModel?userID=${customerId}&projectID=${ProjectId}`
        )
        .catch(function (error) {
          if (error.response.status === 409) {
            document.getElementById("nextBtn").style.display = "none";
            Swal.fire(
              "Oops..., Please try again",
              "Encountered an unexpected condition",
              "error"
            );
          }
        });

      //moving user to the next window
      history.push("/new/request");
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire(
          "Oops..., Please try again",
          "Invalid UserId or ProjectId",
          "error"
        );
      } else {
        console.log(error.response.data.message);
        Swal.fire(
          "Oops..., there was a problem",
          "There was problem with the server",
          "error"
        );
      }
    }
  };

  //method to get the file name
  const onfileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    modelName = e.target.files[0].name;
  };

  //method to get uploaded file
  const onfilesubmit = async (e) => {
    e.preventDefault();
    showNextButton();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios
        .post(
          `${API_URL}/projects/uploadModel?customerId=${customerId}&ProjectId=${ProjectId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .catch(function (error) {
          if (error.response.status === 400) {
            document.getElementById("nextBtn").style.display = "none";
            Swal.fire(
              "No file selected to upload",
              "Select or drag and drop your 3D model before uploading",
              "warning"
            );
          }
        });
      const { filename, filePath } = res.data;
      setUploadedFile({ filename, filePath });

      //progress bar
      let timerInterval;
      Swal.fire({
        title: "Processing....",
        html: `File: <b></b>`,
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = modelName;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
      });
    } catch (error) {
      if (error.response.status === 500) {
        console.log("there was problem with the server");
        Swal.fire(
          "Oops..., Please try again",
          "Encountered an unexpected condition",
          "error"
        );
      } else {
        console.log(error.response.data.message);
        Swal.fire(
          "Oops..., there was a problem",
          "There was problem with the server",
          "error"
        );
      }
    }
  };

  return (
    <React.Fragment>
      <div id="uploadArea">
        <form onSubmit={onfilesubmit}>
          <div id="fileDragDrop">
            <p id="rowOne">Drag And Drop Your Models Here</p>
            <p id="rowTwo">OR</p>
            <br />
            <input
              type="file"
              id="fileInput"
              onChange={onfileChange}
              accept=".stl"
            />
            <p id="rowThree">
              Upload one model at a time (Supported file type: STL)
            </p>
          </div>
          <input type="submit" value="Upload File" id="submitBtn" />
        </form>
      </div>
      <div id="nextBtn" onClick={() => handdleNextClick()}>
        <CustomButton buttonName="Next" />
      </div>
    </React.Fragment>
  );
};

export default FileUpload;
