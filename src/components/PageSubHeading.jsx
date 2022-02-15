import React from "react";
//styles
import "./PageSubHeading.css";

const PageSubHeading = (props) => {
  const subHeading = props.subHeading;
  return (
    <div>
      <h1 id="subHeading">{subHeading}</h1>
    </div>
  );
};

export default PageSubHeading;
