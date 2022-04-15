import React from "react";
// Styles
import "./NotFoundError.css";
//Routing
import { useHistory } from "react-router-dom";
//components
import errImg from "../../storyImages/404 Erro.svg";

const NotFoundError = () => {
  const history = useHistory();

  //handle back to home click
  function handdleBackHomeClick() {
    history.push("/home");
  }

  return (
    <div id="errorContent">
      <img src={errImg} alt="404 error" id="errorImage" />
      <div id="sideContent_error">
        <p id="error_Description">
          Sorry, we couldn't find this page. But don't worry, you can find
          plenty of other things on our home page.
        </p>
        <button id="backToHomeBtn" onClick={() => handdleBackHomeClick()}>
          Go Back to Home{" "}
        </button>
      </div>
    </div>
  );
};

export default NotFoundError;
