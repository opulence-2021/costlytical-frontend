import React from "react";
//routing link (to call the other pages)
import { Link } from "react-router-dom";

//styles
import "./YellowCard.css";
import messenger from "../storyImages/messenger.svg";

const YellowCard = () => {
  return (
    <div id="ContentX">
      <div id="img">
        <img src={messenger}  alt="image x" id="svgImg" />
      </div>
      <div id="ContentY">
        <h2 id="lineOne">
        Check out what orders you’ve
        placed can be confirmed
        </h2>
        <Link to= "/pending">
          <div id="longButtonYellow">
            <div id="textSize">Pending Confirmation</div>
          </div>
        </Link>
        <p id="lineTwo">
        View the orders you have placed and are pending on a response from you.
        </p>
      </div>
    </div>
  );
};
export default YellowCard;