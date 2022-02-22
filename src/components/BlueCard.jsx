import React from "react";
//routing link (to call the other pages)
import { Link } from "react-router-dom";
//styles
import "./BlueCard.css";
import stages from "../storyImages/stages.svg";

const BlueCard = () => {
  return (
    <div id="ContentX">
      <div id="ContentY">
        <h2 id="lineOne">
        Generate costs and submit 
        an order with just one click
        </h2>
        <Link to= "/new">
          <div id="longButtonBlue">
            <div id="textSize">Create A New Project</div>
          </div>
        </Link>
        <p id="lineTwo">
        Start off by submitting a file and generating 
        an estimate of it’s price through a new project.
        </p>
      </div>
      <div id="img">
        <img src={stages}  alt="image x" id="svgImg" />
      </div>
    </div>
  );
};
export default BlueCard;
