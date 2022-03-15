import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./SideBarPending.css";
// Components
import logo from "../../images/logo.png";
import home from "../../images/home.svg";
import newI_o from "../../images/newI_o.svg";
import pending from "../../images/pending.svg";
import awaiting from "../../images/awaiting.svg";
import previous from "../../images/previous.svg";

const SideBarPending = () => {
    return (
        <div id="newSideBar">
            {/* <div id="logo">CostlyticalLogo.png</div> */}
            <Link to="/home">
                <img src={logo} id="logo" alt="Costlytical logo" />
            </Link>
            <div id="navBar">
                {/* nav items */}
                <Link to="/home">
                    <div className="navItem" id="navHome_1">
                        <img src={home} class="navImage" alt="home" />
                        <h2 className="navHeading_3">Home</h2>
                    </div>
                </Link>
                <Link to="/new">
                    <div className="navItem" id="">
                        <img src={newI_o} class="navImage svg" alt="new" />
                        <h2 className="navHeading_3">Create New Project</h2>
                    </div>
                </Link>
                <Link to="/pending">
                    <div className="navItem" id="navPending_1">
                        <div id="selectBlock"></div>
                        <img src={pending} class="choosen navImage" alt="pending" />
                        <h2 className="navHeading_3 selected">Pending Confirmation</h2>
                    </div>
                </Link>
                <Link to="/awaiting">
                    <div className="navItem" id="navAwaiting_1">
                        <img src={awaiting} class="navImage" alt="Awaiting" />
                        <h2 className="navHeading_3">Awaiting Projects</h2>
                    </div>
                </Link>
                <Link to="/previous">
                    <div className="navItem" id="navPrevious_1">
                        <img src={previous} class="navImage" alt="Previous" />
                        <h2 className="navHeading_3">Previous Projects</h2>
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

export default SideBarPending;
