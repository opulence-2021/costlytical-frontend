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
  const customAlert = useAlert();
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
  const newUser = {
    firstName: "First",
    lastName: "Second",
    email: "sample@gmail.com",
    addressLine1: "Nc 10012",
    password: "12345678",
    addressLine2: "New York",
    country: "United States",
    mobileNumber: 773523893,
  };

  //email regex
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //sets the user details to the session storage and move user to home page
  function setUserData(userData) {
    sessionStorage.setItem("user", JSON.stringify(userData));
  }

  //handling the signUp button press
  const handleSignUpClick = () => {
    console.log("Submit");
    if (validateForm()) {
      // method to add user details using axios to call the backend
      try {
        const config = { headers: { "Content-Type": "application/json" } };
        axios
          .post(`${API_URL}/user/createUser`, newUser, config)
          .then(async (res) => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserData(userInfo);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Account Created Successfully",
              showConfirmButton: false,
              timer: 2000,
            });
            // method to move user to home page
            setTimeout(() => history.push("/home"), 2500);
          })
          .catch(function (error) {
            if (error.response.status === 400) {
              Swal.fire(
                "Oops..., there was a problem",
                "Enter a valid user",
                "error"
              );
            } else if (error.response.status === 409) {
              Swal.fire(
                "Oops..., there was a problem",
                "Server cannot find the requested resource",
                "error"
              );
            }
          });
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Oops..., there was a problem",
          "There was problem with the server",
          "error"
        );
      }
    }
  };

  //function to validate fields and update the user object
  function validateForm() {
    if (validateFiled(userFirstName)) {
      newUser.firstName = userFirstName;
      if (validateFiled(userLastName)) {
        newUser.lastName = userLastName;
        if (validateEmail(userEmail)) {
          newUser.email = userEmail;
          if (validateNumber(userNumber)) {
            newUser.mobileNumber = Number(userNumber);
            if (validatePassword(userPasswordOne, userPasswordTwo)) {
              newUser.password = userPasswordOne;
              newUser.addressLine1 = userAddressOne;
              newUser.addressLine2 = userAddressTwo;
              newUser.country = userCountry;
              return true;
            } else {
              customAlert.show("Please fill the password field");
              return false;
            }
          } else {
            customAlert.show("Please fill the contact number field");
            return false;
          }
        } else {
          customAlert.show("Please fill the email field correctly");
          return false;
        }
      } else {
        customAlert.show("Please fill the last name field");
        return false;
      }
    } else {
      customAlert.show("Please fill the first name field");
      return false;
    }
  }
  //validate textfields
  function validateFiled(fieldValue) {
    if (typeof fieldValue === "undefined") {
      return false;
    } else if (fieldValue === "" || fieldValue.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  //function to validate email field
  function validateEmail(email) {
    if (typeof email === "undefined") {
      return false;
    } else if (email === "" || email.length < 2) {
      return false;
    } else if (!email.match(emailReg)) {
      return false;
    } else {
      return true;
    }
  }

  //function to validate number field
  function validateNumber(phoneNumber) {
    if (typeof phoneNumber === "undefined") {
      return false;
    } else if (phoneNumber === "" || phoneNumber.length < 9) {
      return false;
    } else if (isNaN(phoneNumber)) {
      return false;
    } else {
      return true;
    }
  }

  //function to validate password
  function validatePassword(passOne, PassTwo) {
    if (typeof passOne === "undefined" || typeof PassTwo === "undefined") {
      return false;
    } else if (passOne === "" || passOne.length < 5) {
      return false;
    } else if (PassTwo === "" || PassTwo.length < 5) {
      return false;
    } else if (!(passOne === PassTwo)) {
      customAlert.show("Passwords does not match");
      return false;
    } else {
      return true;
    }
  }

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
