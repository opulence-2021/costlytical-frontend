import { React } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// Images
import stagesImage from "../../../../storyImages/stages.svg";

export default function EmptyProjects() {
  return (
    <>
      <h1 style={{ marginBottom: "25px" }}>
        Your awaiting projects will appear here
      </h1>

      <div
        style={{
          backgroundColor: "var(--lightGray)",
          borderRadius: "8px",
          display: "flex",
          padding: "30px",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "20px 15px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "40px" }}>
            You have no awaiting projects at the moment
          </h3>

          <Button variant="contained" style={{ marginBottom: "40px" }}>
            Create a new project
          </Button>

          <p>
            Start off by submitting a file and generating an estimate of it’s
            price through a new project.
          </p>

          {/* Remove below line */}
          <Link to="awaiting-projects" style={{ marginTop: "20px" }}>
            Show Projects (demo link)
          </Link>
        </div>

        <div style={{ flex: 1, padding: "15px", marginRight: "-15px" }}>
          <img src={stagesImage} />
        </div>
      </div>
    </>
  );
}
