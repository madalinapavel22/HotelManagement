/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
// import { Frame } from "../Frame";
// import { Teams } from "../Teams";
import "./style.css";

export const Property = ({ className }) => {
  return (
    <div className={`property ${className}`}>
      <div className="overlap-group-3">
        <div className="component-3">
          <Frame
            className="frame-2"
            roomsPropertyDefault="https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a1d754b6dfa0dba5a6f339/img/rooms@2x.png"
            text={
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </>
            }
            text1={
              <>
                {" "}
                TEAMS
                <br />
              </>
            }
          />
        </div>
        <Teams
          className="design-component-instance-node"
          property1="default"
          propertyDefault="https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a1d845755dcb3d3011c4b9/img/teams@2x.png"
        />
      </div>
    </div>
  );
};
