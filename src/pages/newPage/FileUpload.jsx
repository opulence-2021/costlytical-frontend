import React, { useState } from "react";
import axios from "axios";
import { URL } from "../../api";
// Styles
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [filename, setFileName] = useState("choose file");
  const [uploadedFile, setUploadedFile] = useState();

  //method to get the file name
  const onfileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  //method to get uploaded file
  const onfilesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    //project data // get these from session storage (userId and Project Id)
    //add sweet alert for errors and add a progress bar for file upload %.
    const customerId = "5ewerewr";
    const ProjectId = "sample13242343423423";

    try {
      const res = await axios.post(
        `${URL}/projects/uploadModel?customerId=${customerId}&ProjectId=${ProjectId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { filename, filePath } = res.data;
      setUploadedFile({ filename, filePath });
    } catch (error) {
      if (error.response.status === 500) {
        console.log("there was problem with the server");
      } else {
        console.log(error.response.data.message);
      }
    }
  };

  return (
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
  );
};

export default FileUpload;
