import React from "react";
// Styles
import "./LoginPage.css";
// Components
import LoginCard from "./LoginCard";

const Login = () => {
  return (
    <div className="signin">
      <div id="cardBgSignIn">
        <LoginCard />
      </div>
      <div id="textOrganization">
        <div id="titleOne">
          <p>
            Welcome to
          </p>
        </div>
        <div id="titleTwo">
          <p>
            Costlytical
          </p>
        </div>
        <hr className="lineThing"></hr>
        <div id="titleThree">
          <p>
            “Reality leaves a lot to the imagination”
          </p>
        </div>
      </div>  
    </div>
  );
};

export default Login;
