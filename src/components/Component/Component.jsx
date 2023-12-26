/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Component = ({
  property1,
  className,
  overlapGroupClassName,
  rectangleClassName,
  rectangle = "/img/rectangle-8.png",
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "component-1",
  });

  return (
    <Link
      className={`component ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`overlap-group ${state.property1} ${overlapGroupClassName}`}>
        <img
          className={`rectangle ${rectangleClassName}`}
          alt="Rectangle"
          src={state.property1 === "component-1" ? rectangle : "/img/rectangle-9.png"}
        />
        <div className="text-wrapper">Housekeeper</div>
        <img
          className="cleaner"
          alt="Cleaner"
          src={state.property1 === "component-1" ? "/img/cleaner-1.png" : "/img/cleaner-2.png"}
        />
      </div>
    </Link>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "component-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "component-1",
      };
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["component-1", "component-2"]),
  rectangle: PropTypes.string,
  to: PropTypes.string,
};
