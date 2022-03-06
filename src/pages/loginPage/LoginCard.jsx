import React from 'react';
//alerts
import { useAlert } from 'react-alert';
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./LoginCard.css";
// Components
import logo from "../../images/logo.png";
import SignInTextField from "../../components/SignInTextField";
import CustomButton from "../../components/CustomButton";

const LoginCard = () => {
    const alert = useAlert()
    const history = useHistory();
    let eMail = "email";
    let passWord = "pass";
    //email regex
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  
    //validator function
    const validate = (valueE,valueP) => {
        let pass = 1;
        let ema = 1;
        if (emailReg.test(valueE) == 0) {
            alert.show('Incorrect Email Format!');
            ema = 0;
        }
        if (test(valueP) == 0) {
            alert.show('Password must be entered!');
            pass = 0;
        } else {
            ema = 1;
            pass = 1;
        }
        if (ema && pass == 1){
            history.push("/home");
        }
    }

    //handling the signIn button press
    const handleSigninClick = () => {
        validate(geteMail, getPasswrd);
    };
  
    //gets the user's name from the text field
    function geteMail(em) {
        eMail = em;
        console.log(eMail);
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
                    getData={geteMail}
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