import React, { useState } from "react";
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
import CustomButton from "../../components/CustomButton";

const LoginCard = () => {
  const alert = useAlert();
  const history = useHistory();

  //email regex
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //validator function, amanda@gmail.com
  const validate = (email, password) => {
    let passCheck = true;
    let emailCheck = true;

    //email checker
    if (email === "") {
      alert.show("Incorrect Email Format!");
      emailCheck = false;
    } else if (email.length < 10) {
      alert.show("Incorrect Email Format!");
      emailCheck = false;
    } else if (!email.match(emailReg)) {
      alert.show("Incorrect Email Format!");
      emailCheck = false;
    } else {
      emailCheck = true;
    }

    //password checker
    if (emailCheck) {
      if (password === "") {
        alert.show("Password must be entered!");
        passCheck = false;
      } else if (password.length < 5) {
        alert.show("Password must be entered!");
        passCheck = false;
      } else {
        passCheck = true;
      }
    }

    //function to send the api request to validate credentials and get user data
    if (emailCheck === true && passCheck === true) {
      try {
        axios
          .post(
            `${API_URL}/user/login?mailAdress=${email}&password=${password}`
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
    validate(email, password);
  };

  return (
    <div id="blockSide">
      <img src={logo} id="logoMain" alt="Costlytical logo" />
      <div id="theRest">
        {/* Email Field */}
        <div id="Username">
          <label htmlFor="email" id="email" style={{ display: "block" }}>
            Email
          </label>
          <input
            type="text"
            id="email"
            className="CustomtextField"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="example@gmail.com"
          ></input>
        </div>

        {/* Password Field */}
        <div id="Password">
          <label htmlFor="password" id="password" style={{ display: "block" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className="passwordField"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={password}
          ></input>
        </div>
        <div id="ButtonsAlignment">
          <div id="signInButton" div onClick={() => handleSigninClick()}>
            <CustomButton buttonName="Sign In" />
          </div>
          <div id="signUp">
            <CustomButton buttonName="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
