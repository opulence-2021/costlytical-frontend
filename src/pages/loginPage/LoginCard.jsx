import React from "react";
import axios from "axios";
import { API_URL } from "../../api";
//alerts
import { useAlert } from "react-alert";
import Swal from "sweetalert2";
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./LoginCard.css";
// Components
import logo from "../../images/logo.png";
import SignInTextField from "../../components/SignInTextField";
import CustomButton from "../../components/CustomButton";
import PasswordField from "../../components/PasswordField";

const LoginCard = () => {
  const alert = useAlert();
  const history = useHistory();
  let eMail = "email";
  let passWord = "pass";
  //email regex
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //validator function
  const validate = (valueE, valueP) => {
    let passCheck = true;
    let emaCheck = true;

    //grabs the value of the email
    let Mail = valueE;
    //grabs the value of the password
    let Passs = valueP;

    //email checker
    if (Mail === "") {
      alert.show("Incorrect Email Format!");
      emaCheck = false;
    } else if (Mail.length < 10) {
      alert.show("Incorrect Email Format!");
      emaCheck = false;
    } else if (!Mail.match(emailReg)) {
      alert.show("Incorrect Email Format!");
      emaCheck = false;
    } else {
      emaCheck = true;
    }

    //password checker
    if (emaCheck) {
      if (Passs === "") {
        alert.show("Password must be entered!");
        passCheck = false;
      } else if (Passs.length < 5) {
        alert.show("Password must be entered!");
        passCheck = false;
      } else {
        passCheck = true;
      }
    }

    //function to send the api request to validate credentials and get user data
    if (emaCheck === true && passCheck === true) {
      try {
        axios
          .post(
            `${API_URL}/user/login?mailAdress=${eMail}&password=${passWord}`
          )
          .then((res) => {
            const responseLogin = res.data;
            setUserData(responseLogin);
          })
          .catch(function (error) {
            if (error.response.status === 401) {
              Swal.fire(
                "There was a problem",
                "Enter the correct email address and pasword to sign in",
                "warning"
              );
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  //sets the user details to the session storage and move user to home page
  function setUserData(userData) {
    sessionStorage.setItem("user", JSON.stringify(userData));
    history.push("/home");
  }

  //handling the signIn button press
  const handleSigninClick = () => {
    validate(eMail, passWord);
  };

  //handling the signUp button press
  const handleSignUpClick = () => {
    history.push("/signUp");
  };

  //gets the user's name from the text field
  function geteMail(em) {
    eMail = em;
    return eMail;
  }
  //gets the password from the text field
  function getPasswrd(passwrd) {
    passWord = passwrd;
    return passWord;
  }

  return (
    <div id="blockSide">
      <img src={logo} id="logoMain" alt="Costlytical logo" />
      <div id="theRest">
        <div id="Username">
          <SignInTextField
            labelname="Email"
            placeholderText="example@gmail.com"
            textFieldID="email"
            getData={geteMail}
          />
        </div>
        <div id="Password">
          <PasswordField
            labelname="Password"
            placeholderText="password"
            textFieldID="pass"
            getData={getPasswrd}
          />
        </div>
        <div id="ButtonsAlignment">
          <div id="signInButton" onClick={() => handleSigninClick()}>
            <CustomButton buttonName="Sign In" />
          </div>
          <div id="signUp" onClick={() => handleSignUpClick()}>
            <CustomButton buttonName="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
