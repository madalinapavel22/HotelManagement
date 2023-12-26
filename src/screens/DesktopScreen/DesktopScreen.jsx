import React from "react";
import { Link } from "react-router-dom";
import { Component } from "../../components/Component";
import { DivWrapper } from "../../components/DivWrapper";
import { PropertyComponentWrapper } from "../../components/PropertyComponentWrapper";
import "./style.css";

export const DesktopScreen = () => {
  return (
    <div className="desktop-screen">
      <div className="desktop-2">
        <div className="overlap-4">
          <div className="text-wrapper-5">SELECT USER TYPE</div>
          <img className="img" alt="Line" src="/img/line-1.svg" />
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-6">NEXT</div>
          <Link to="/desktop-3">
            <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
          </Link>
        </div>
        <Component
          className="component-3"
          overlapGroupClassName="component-instance"
          property1="component-1"
          rectangle="/img/rectangle-8-1.svg"
          rectangleClassName="component-instance"
          to="/desktop-2"
        />
        <PropertyComponentWrapper className="component-6" property1="component-4" to="/desktop-6" />
        <DivWrapper className="component-9" property1="component-7" to="/desktop-5" />
      </div>
    </div>
  );
};
