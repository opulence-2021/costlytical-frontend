import React from "react";
// Styles
import "./HomeCard.css";
import PageHeading from "../../components/PageHeading";
import BlueCard from "../../components/BlueCard";
import YellowCard from "../../components/YellowCard";
import RedCard from "../../components/RedCard";
import PurpleCard from "../../components/PurpleCard";

const HomeCardBackground = () => {
  return (
    <div id="cardBackground">
      {/* content of the page comes here */}
      <div id="pageHeading">
        <PageHeading pagename="Welcome User!" />
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