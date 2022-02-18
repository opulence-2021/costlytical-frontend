import React from "react";
// Styles
import "./HomeCard.css";
// Story Images and other components
import LongButton from "../../components/LongButton";
import PageHeading from "../../components/PageHeading";
import messenger from "../../storyImages/messenger.svg";
import stages from "../../storyImages/stages.svg";
import stats from "../../storyImages/stats.svg";
import waiting from "../../storyImages/waiting.svg";

function MiniBox(props) {
  return (
    <div id="ContentX">
      <div id="ContentY">
        <h2 id="rowOne">
        Generate costs and submit 
        an order—with just one click
        </h2>
        <div id="Button">
          <LongButton buttonName="Create A New Project" />
        </div>
        <h2 id="rowTwo">
        Generate costs and submit 
        an order—with just one click
        </h2>
      </div>
      <div id="img">
        <img src={stages}  alt="image x" id="svgImg" />
      </div>
    </div>
  );
}

const HomeCardBackground = () => {
  return (
    <div id="cardBackground">
      {/* content of the page comes here */}
      <div id="pageHeading">
        <PageHeading pagename="Welcome User!" />
      </div>

        <MiniBox 
          text="Generate costs and submit an order—with just one click" 
          textTwo="Create a New Project"
          textThree="Start off by submitting a file and generating an estimate of it’s
          price through a new project."
          />
      
    </div>
  );
};

export default HomeCardBackground;
