import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./SideBarPending.css";
// Components
import logo from "../../images/logo.png";
import home from "../../images/home.svg";
import newI_o from "../../images/newI.svg";
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
                    <div className="nav__link" id="nav__home">
                        <img src={home} class="nav__image" alt="home" />
                        <h2 className="nav__heading">Home</h2>
                    </div>
                </Link>
                <Link to="/new">
                    <div className="nav__link" id="newNav">
                        <img src={newI_o} class="nav__image" alt="new" />
                        <h2 className="nav__heading">Create New Project</h2>
                    </div>
                </Link>
                <Link to="/pending">
                    <div className="nav__link" id="navPending_1">
                        <div id="selectBlock"></div>
                        <img src={pending} class="choosen nav__image" alt="pending" />
                        <h2 className="nav__heading selected">Pending Confirmation</h2>
                    </div>
                </Link>
                <Link to="/awaiting">
                    <div className="nav__link" id="navAwaiting_1">
                        <img src={awaiting} class="nav__image" alt="Awaiting" />
                        <h2 className="nav__heading">Awaiting Projects</h2>
                    </div>
                </Link>
                <Link to="/previous">
                    <div className="nav__link" id="navPrevious_1">
                        <img src={previous} class="nav__image" alt="Previous" />
                        <h2 className="nav__heading">Previous Projects</h2>
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
