import React from "react";
import "./Banner.css";
import video from "./banner.mp4";

function Banner() {
  return (
    <video className="vv" autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Banner;
