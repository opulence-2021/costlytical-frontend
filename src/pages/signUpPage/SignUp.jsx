import React from "react";
// Styles
import "./SignUp.css";
// Components
import SignUpCard from "./SignUpCard";

const SignUp = () => {
  return (
    <div className="signUpPage_background">
      <div id="cardBackground_Signup">
        <SignUpCard />
      </div>
      <div id="signUp_sideContent">
        <div id="textOrganization">
          <div id="titleOne">
            <p>Welcome to</p>
          </div>
          <div id="titleTwo">
            <p>Costlytical</p>
          </div>
          <hr className="lineThing"></hr>
          <div id="titleThree">
            <p>“Reality leaves a lot to the imagination”</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default SignUp;
