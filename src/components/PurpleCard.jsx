import React from "react";
//routing link (to call the other pages)
import { Link } from "react-router-dom";

//styles
import "./PurpleCard.css";
import stats from "../storyImages/stats.svg";

const PurpleCard = () => {
  return (
    <div id="ContentX">
      <div id="img">
        <img src={stats}  alt="image x" id="svgImg" />
      </div>
      <div id="ContentY">
        <h2 id="lineOne">
        Check out what orders you’ve 
        recieved in the past
        </h2>
        <Link to= "/previous">
          <div id="longButtonPurple">
            <div id="textSize">Previous Projects</div>
          </div>
        </Link>
        <p id="lineTwo">
        View all of the projects and orders you’ve made and placed in the past.
        </p>
      </div>
    </div>
  );
};
export default PurpleCard;
