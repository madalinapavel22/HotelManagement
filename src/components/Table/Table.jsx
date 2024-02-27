/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Table = ({ property1, propertyHeadpropClassName, tableHeadClassName, text = "<br/>Table head" }) => {
  return (
    <>
      {["head-prop", "text-cell"].includes(property1) && (
        <div className={`table property-headprop ${property1} ${propertyHeadpropClassName}`}>
          <div className={`table-head ${tableHeadClassName}`}>
            {property1 === "head-prop" && <>{text}</>}

            {property1 === "text-cell" && (
              <>
                <br />
                Table body
              </>
            )}
          </div>
        </div>
      )}

      {property1 === "check" && (
        <img
          className={`table property-check ${propertyHeadpropClassName}`}
          alt="Property check"
          src="https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a03ae3cbd2bbc990195f40/img/property-1-check@2x.png"
        />
      )}
    </>
  );
};

Table.propTypes = {
  property1: PropTypes.oneOf(["text-cell", "head-prop", "check"]),
  text: PropTypes.string,
};
