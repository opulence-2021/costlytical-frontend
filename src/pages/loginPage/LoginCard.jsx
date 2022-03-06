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
        let passCheck = true;
        let emaCheck = true;

        //grabs the value of the email
        let Mail = valueE;
        //grabs the value of the password
        let Passs = valueP;

        //email checker
        if (Mail == "") {
            alert.show('Incorrect Email Format!');
            emaCheck = false;
        } else if (Mail.length < 10) {
            alert.show('Incorrect Email Format!');
            emaCheck = false;
        } else if (!(Mail.match(emailReg))) {
            alert.show('Incorrect Email Format!');
            emaCheck = false;
        } else {
            emaCheck = true;
        }
        console.log(Mail);
        console.log(emaCheck);
        //password checker
        if (emaCheck) {
            if (Passs == ""){
                alert.show('Password must be entered!');
                passCheck = false;
            } else if (Passs.length < 10 ){
                alert.show('Password must be entered!');
                passCheck = false;
            } else {
                passCheck = true;
            }
        } 

        if (emaCheck == true && passCheck == true){
            history.push("/home");
        }
    }

    //handling the signIn button press
    const handleSigninClick = () => {
        validate(eMail, passWord);
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