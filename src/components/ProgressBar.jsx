import React from "react";
//styles
import "./ProgressBar.css";
//components
import ProjressSet from "./ProjressSet.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeOption } from "./theme.js";

const ProgressBar = (props) => {
  return (
    <div id="progressBar_container">
      <div id="progressBar_container_inner">
        <ThemeProvider theme={ThemeOption}>
          <ProjressSet selectedStep={props.currentStep} />
        </ThemeProvider>
      </div>
    </div>
  );
};
export default ProgressBar;
