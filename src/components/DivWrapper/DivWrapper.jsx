/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = ({ property1, className, to }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "component-7",
  });

  return (
    <Link
      className={`div-wrapper ${state.property1} ${className}`}
      to={to}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img
        className="planning"
        alt="Planning"
        src={state.property1 === "component-8" ? "/img/planning-2.png" : "/img/planning-1.png"}
      />
      <div className="text-wrapper-2">Manager</div>
    </Link>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "component-8",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "component-7",
      };
  }

  return state;
}

DivWrapper.propTypes = {
  property1: PropTypes.oneOf(["component-8", "component-7"]),
  to: PropTypes.string,
};
