import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../api";
// Styles
import "./HomeCard.css";
//components
import PageHeading from "../../components/PageHeading";
import BlueCard from "../../components/BlueCard";
import YellowCard from "../../components/YellowCard";
import RedCard from "../../components/RedCard";
import PurpleCard from "../../components/PurpleCard";

const HomeCardBackground = () => {
  //API URL
  const url = `${URL}/userName`;

  //method to get user name : update!
  const [userName, setUserName] = useState("User");
  useEffect(() => {
    axios.get(`${url}`).then((res) => {
      const responseName = res.data.name;
      setUserName(responseName);
      console.log(responseName);
    });
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
