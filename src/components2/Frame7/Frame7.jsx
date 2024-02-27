/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useState } from "react";
import React from "react";
import "./style.css";

export const Frame7 = ({ className , onToggleFrame,count}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log("Frame7 clicked!");
    onToggleFrame();
    setIsClicked(!isClicked);
  };
  return (
    <div
    className={`frame-7 ${className} ${isClicked ? "clicked" : ""}`}
    onClick={handleClick}
  >
      <div className="frame-8">
        <img
          className="vector-2"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a1d845755dcb3d3011c4b9/img/vector-4@2x.png"
        />
        <div className="text-wrapper-6">{count}</div>
        <div className="text-wrapper-7">Departures</div>
      </div>
    </div>
  );
};
