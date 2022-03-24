import React, { useState, useEffect } from "react";
// Styles
import "./HomeCard.css";
//Routing
import { useHistory } from "react-router-dom";
//components
import PageHeading from "../../components/PageHeading";
import BlueCard from "../../components/BlueCard";
import YellowCard from "../../components/YellowCard";
import RedCard from "../../components/RedCard";
import PurpleCard from "../../components/PurpleCard";

const HomeCardBackground = () => {
  const history = useHistory();
  //method to get user name from session storage
  const [userName, setUserName] = useState("User");
  useEffect(() => {
    if (sessionStorage.length == 0) {
      history.push("/login");
    } else {
      const user = JSON.parse(sessionStorage.user);
      let { firstName } = user;
      setUserName(firstName);
      console.table(user);
    }
  }, []);
  let userNameTxt = `Welcome ${userName}`;
  return (
    <div id="cardBackground">
      <div id="pageHeading">
        <PageHeading pagename={userNameTxt} />
      </div>
      <div id="blueCard">
        <BlueCard />
      </div>
      <div id="yellowCard">
        <YellowCard />
      </div>
      <div id="redCard">
        <RedCard />
      </div>
      <div id="purpleCard">
        <PurpleCard />
      </div>
    </div>
  );
};

export default HomeCardBackground;
