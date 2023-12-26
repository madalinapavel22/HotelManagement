/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const PropertyComponentWrapper = ({ property1, className, to }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "component-4",
  });

  return (
    <Link
      className={`property-component-wrapper ${state.property1} ${className}`}
      to={to}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="div">Client</div>
      <img
        className="costumer"
        alt="Costumer"
        src={state.property1 === "component-5" ? "/img/costumer-2.png" : "/img/costumer-1.png"}
      />
    </Link>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "component-5",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "component-4",
      };
  }

  return state;
}

PropertyComponentWrapper.propTypes = {
  property1: PropTypes.oneOf(["component-4", "component-5"]),
  to: PropTypes.string,
};
