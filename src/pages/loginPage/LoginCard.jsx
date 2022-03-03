import React from "react";
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./LoginCard.css";
// Components
import logo from "../../images/logo.png";
import SignInTextField from "../../components/SignInTextField";
import CustomButton from "../../components/CustomButton";

const LoginCard = () => {
    const history = useHistory();
    let userName = "user";
    let passWord = "pass";
  
    //handling the signIn button press
    const handleSigninClick = () => {
      // alert("pressed signin button");
      history.push("/home");
    };
  
    //gets the user's name from the text field
    function getuserName(user) {
        userName = user;
        console.log(userName);
    }
    //gets the password from the text field
    function getPasswrd(passwrd) {
        passWord = passwrd;
        console.log(passwrd);
    }
  
    return (
        <div id="blockSide">
            <img src={logo} id="logoMain" alt="Costlytical logo"/>
            <div id="theRest">
                <div id="Username">
                    <SignInTextField
                    labelname="Email"
                    placeholderText="example@gmail.com"
                    getData={getuserName}
                    />
                </div>
                <div id="Password">
                    <SignInTextField
                    labelname="Password"
                    placeholderText="password"
                    getData={getPasswrd}
                    />
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