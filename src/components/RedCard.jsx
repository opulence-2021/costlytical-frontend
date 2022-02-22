import React from "react";
//routing link (to call the other pages)
import { Link } from "react-router-dom";

//styles
import "./RedCard.css";
import waiting from "../storyImages/waiting.svg";

const RedCard = () => {
  return (
    <div id="ContentX">
      <div id="ContentY">
        <h2 id="lineOneRed">
        Check out the projects which
        are waiting for a response
        </h2>
        <Link to= "/awaiting">
          <div id="longButtonRed">
            <div id="textSize">Awaiting Projects</div>
          </div>
        </Link>
        <p id="lineTwoRed">
        Find out what projects you’ve created have been
        awaiting for confirmation from the service provider, estimates and even processing projects. 
        </p>
      </div>
      <div id="img">
        <img src={waiting}  alt="image x" id="svgImg" />
      </div>
    </div>
  );
};
export default RedCard;
