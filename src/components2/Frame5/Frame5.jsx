/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import React, { useState } from "react";
import React from "react";
import { EmployeesTeams } from "../EmployeesTeams";
import "./style.css";

export const Frame5 = ({ className, onToggleFrame , availableRoomsCount }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onToggleFrame();
    console.log("Frame5 clicked!");
  };
  return (
    <div
    className={`frame-5 ${className} ${isClicked ? "clicked" : ""}`}
    onClick={handleClick}
  >
      <div className="frame-3">
        <EmployeesTeams className="employees-teams-variant4" />
        <div className="text-wrapper-2">{availableRoomsCount}</div>
        <div className="text-wrapper-3">Available Rooms</div>
      </div>
    </div>
  );
};
