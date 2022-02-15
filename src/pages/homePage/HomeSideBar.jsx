import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./HomeSideBar.css";
// Components
import logo from "../../images/logo.png";
import home_o from "../../images/home_o.svg";
import newI from "../../images/newI.svg";
import pending from "../../images/pending.svg";
import awaiting from "../../images/awaiting.svg";
import previous from "../../images/previous.svg";

const HomeSideBar = () => {
  return (
    <div id="sideBar">
      {/* <div id="logo">CostlyticalLogo.png</div> */}
      <Link to="/">
        <img src={logo} id="logo" alt="Costlytical logo" />
      </Link>
      <div id="navBar">
        {/* nav items */}
        <Link to="/">
          <div className="navItem" id="navHome">
            <div id="selectBlock"></div>
            <img src={home_o} class="navImage" alt="home" />
            <h2 className="navHeading">Home</h2>
          </div>
        </Link>
        <Link to="/new">
          <div className="navItem" id="navNew">
            <img src={newI} class="navImage" alt="new" />
            <h2 className="navHeading">Create New Project</h2>
          </div>
        </Link>
        <Link to="/pending">
          <div className="navItem" id="navPending">
            <img src={pending} class="navImage" alt="pending" />
            <h2 className="navHeading">Pending Confirmation</h2>
          </div>
        </Link>
        <Link to="/awaiting">
          <div className="navItem" id="navAwaiting">
            <img src={awaiting} class="navImage" alt="Awaiting" />
            <h2 className="navHeading">Awaiting Projects</h2>
          </div>
        </Link>
        <Link to="/previous">
          <div className="navItem" id="navPrevious">
            <img src={previous} class="navImage" alt="Previous" />
            <h2 className="navHeading">Previous Projects</h2>
          </div>
        </Link>
      </div>
      {/* user detail bar */}
      <div id="userDetails">
        <div id="userImg"></div>
        <div id="userName"></div>
      </div>
    </div>
  );
};

export default HomeSideBar;
