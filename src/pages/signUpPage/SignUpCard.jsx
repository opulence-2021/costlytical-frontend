import React from "react";
import axios from "axios";
import { API_URL } from "../../api";
//alerts
import { useAlert } from "react-alert";
import Swal from "sweetalert2";
//Routing
import { useHistory } from "react-router-dom";
// Styles
import "./SignUpCard.css";
// Components
import logo from "../../images/logo.png";
import SignInTextField from "../../components/SignInTextField";
import CustomButton from "../../components/CustomButton";
import PasswordField from "../../components/PasswordField";

const SignUpCard = () => {
  const alert = useAlert();
  const history = useHistory();

  //user Details
  let userFirstName = "";
  let userLastName = "";
  let userEmail = "";
  let userAddressOne = "";
  let userAddressTwo = "";
  let userCity = "";
  let userCountry = "";
  let userNumber = "";
  let userPasswordOne = "";
  let userPasswordTwo = "";

  //   //email regex
  //   const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //   //sets the user details to the session storage and move user to home page
  //   function setUserData(userData) {
  //     sessionStorage.setItem("user", JSON.stringify(userData));
  //     history.push("/home");
  //   }

  //handling the signUp button press
  const handleSignUpClick = () => {
    console.log("Submit");
  };

  //gets the user's first name from the text field
  function getFirstName(firstName) {
    userFirstName = firstName;
    return userFirstName;
  }
  //gets the user's second name from the text field
  function getLastName(lastName) {
    userLastName = lastName;
    return userLastName;
  }
  //gets the user's email from the text field
  function getEmail(email) {
    userEmail = email;
    return userEmail;
  }
  //gets the user's address from the text fields
  function getAddressOne(AddressOne) {
    userAddressOne = AddressOne;
    return userAddressOne;
  }
  function getAddressTwo(AddressTwo) {
    userAddressTwo = AddressTwo;
    return userAddressTwo;
  }
  function getCity(city) {
    userCity = city;
    return userCity;
  }
  function getCountry(Country) {
    userCountry = Country;
    return userCountry;
  }
  //gets the user's contact number from the text fields
  function getNumber(contact) {
    userNumber = contact;
    return userNumber;
  }
  //gets the password from the text fields
  function getPasswordOne(passwordOne) {
    userPasswordOne = passwordOne;
    return userPasswordOne;
  }
  function getPasswordTwo(passwordTwo) {
    userPasswordTwo = passwordTwo;
    return userPasswordTwo;
  }

  return (
    <div id="signupCard_Content">
      <div id="signup_logo">
        <img src={logo} id="logoSignUp" alt="Costlytical logo" />
      </div>
      <div id="sign_form">
        <div id="nameRow" className="form_row">
          <div id="sFirstName">
            <SignInTextField
              labelname="Name"
              placeholderText="First Name"
              textFieldID="firstName_text"
              getData={getFirstName}
            />
          </div>
          <div id="sLastName" className="formSecondRow">
            <SignInTextField
              labelname=""
              placeholderText="Last Name"
              textFieldID="lasttName_text"
              getData={getLastName}
            />
          </div>
        </div>
        <div id="emaiRow" className="form_row">
          <div id="sEmail">
            <SignInTextField
              labelname="Email"
              placeholderText="example@this.com"
              textFieldID="email_text"
              getData={getEmail}
            />
          </div>
        </div>
        <div id="addressRowOne" className="form_row">
          <div id="sAddressOne">
            <SignInTextField
              labelname="Home Address"
              placeholderText="Address Line 1"
              textFieldID="AddressOne_text"
              getData={getAddressOne}
            />
          </div>
          <div id="sAddresstwo" className="formSecondRow">
            <SignInTextField
              labelname=""
              placeholderText="Address Line 2"
              textFieldID="AddressTwo_text"
              getData={getAddressTwo}
            />
          </div>
        </div>
        <div id="addressRowTwo" className="form_row">
          <div id="sCity">
            <SignInTextField
              labelname=""
              placeholderText="City"
              textFieldID="city_text"
              getData={getCity}
            />
          </div>
          <div id="sAddresstwo" className="formSecondRow">
            <SignInTextField
              labelname=""
              placeholderText="Country"
              textFieldID="country_text"
              getData={getCountry}
            />
          </div>
        </div>
        <div id="contactRow" className="form_row">
          <div id="sContact">
            <SignInTextField
              labelname="Contact Number"
              placeholderText="+94  - - -  - - - -"
              textFieldID="contact_text"
              getData={getNumber}
            />
          </div>
        </div>
        <div id="passwordRow" className="form_row">
          <div id="PasswordOne">
            <PasswordField
              labelname="Enter the Password"
              placeholderText="New password"
              textFieldID="PasswordOne_text"
              getData={getPasswordOne}
            />
          </div>
          <div id="PasswordTwo" className="formSecondRow">
            <PasswordField
              labelname=""
              placeholderText="Confirm the password"
              textFieldID="PasswordTwo_text"
              getData={getPasswordTwo}
            />
          </div>
        </div>
      </div>
      <div id="signUpButn" onClick={() => handleSignUpClick()}>
        <CustomButton buttonName="Sign Up" />
      </div>
    </div>
  );
};

export default SignUpCard;
