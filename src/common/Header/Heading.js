import React from "react";
import classes from "./Heading.module.css";

function Heading(props) {
  const { title, subTitle, color } = props;
  return (
    <div className={classes.headingDiv}>
      <div className={classes.heading}>
        <h1
          className={`font-sans text-4xl 2xl:text-7xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl font-bold`}
          style={{ color: color }}
        >
          {title}
        </h1>
        <p className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg sm:text-md text-white underline decoration-white font-light underline-offset-8 2xl:pt-5 xl:pt-4 lg:pt-3 md:pt-2 sm:pt-1 font-sans">
          VIEW OUR WORKS&#8599;
        </p>
      </div>
      <div className={classes.headingInfo}>
        <div className="2xl:text-2xl xl:text-3xl lg:text-2xl md:text-lg sm:text-md text-white font-light font-sans">
          <p>Featured</p>
          <p>{subTitle}</p>
        </div>
        <div className="2xl:text-2xl xl:text-3xl lg:text-2xl md:text-lg sm:text-md text-white font-light font-sans">
          <p>Some recent work</p>
          <p>we are proud of...</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
