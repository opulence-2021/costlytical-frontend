import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Set the project name",
  "Upload your models",
  "Select print Settings",
  "Confirm request",
];

export default function HorizontalLabelPositionBelowStepper(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.selectedStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
