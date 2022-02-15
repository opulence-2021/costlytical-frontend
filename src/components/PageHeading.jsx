import React from "react";
//styles
import "./PageHeading.css";

const PageHeading = (props) => {
  const pagename = props.pagename;
  return (
    <div>
      <h1 id="heading">{pagename}</h1>
    </div>
  );
};

export default PageHeading;
