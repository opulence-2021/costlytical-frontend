import React from "react";
// Styles
import "./HomeCard.css";
// Components
import PageHeading from "../../components/PageHeading";

const HomeCardBackground = () => {
  return (
    <div id="cardBackground">
      {/* content of the page comes here */}
      <div id="pageHeading">
        <PageHeading pagename="This is Home Page" />
      </div>
    </div>
  );
};

export default HomeCardBackground;
