import React from "react";
// Styles
import "./Home.css";
// Components
import HomeSideBar from "./HomeSideBar";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <div className="home">
      <div id="sideBar">
        <HomeSideBar />
      </div>
      <div id="cardBackground">
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
