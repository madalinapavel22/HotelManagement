/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useState } from "react";
import React from "react";
import "./style.css";

export const Frame6 = ({ className, onToggleFrame , count}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onToggleFrame();
    console.log("Frame6 clicked!");

  };
  return (
    <div
      className={`frame-6 ${className} ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <div className="frame-4">
        <img
          className="img"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a1d845755dcb3d3011c4b9/img/vector-6@2x.png"
        />
        <div className="text-wrapper-4">{count}</div>
        <div className="text-wrapper-5">Arrivals</div>
      </div>
    </div>
  );
};
