import { React } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// Styles
import "./AppMenu.css";

// Images
import logo from "../../../../images/logo.png";

export default function () {
  return (
    <>
      {/* Logo */}
      <Link to="/home" className="logo-wrapper">
        <img src={logo} id="logo" alt="Costlytical logo" />
      </Link>

      {/* Main nav */}
      <nav className="main-nav">
        <NavLink to="/home" className="nav-item" activeClassName="active">
          <span className="nav-item-icon">
            <FontAwesomeIcon icon={solid("house")} />
          </span>
          <span className="nav-item-text">Home</span>
        </NavLink>
        <NavLink to="/new" className="nav-item" activeClassName="active">
          <span className="nav-item-icon">
            <FontAwesomeIcon icon={solid("rocket")} />
          </span>
          <span className="nav-item-text">Creat New Project</span>
        </NavLink>
        <NavLink to="/pending" className="nav-item" activeClassName="active">
          <span className="nav-item-icon">
            <FontAwesomeIcon icon={solid("user-clock")} />
          </span>
          <span className="nav-item-text">Pending Confirmation</span>
        </NavLink>
        <NavLink to="/awaiting" className="nav-item" activeClassName="active">
          <span className="nav-item-icon">
            <FontAwesomeIcon icon={solid("hourglass-start")} />
          </span>
          <span className="nav-item-text">Awaiting Projects</span>
        </NavLink>
        <NavLink to="/previous" className="nav-item" activeClassName="active">
          <span className="nav-item-icon">
            <FontAwesomeIcon icon={solid("backward-step")} />
          </span>
          <span className="nav-item-text">Previous Projects</span>
        </NavLink>
      </nav>
    </>
  );
}
