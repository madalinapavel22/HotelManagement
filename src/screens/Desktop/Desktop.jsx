import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="overlap-group-2">
          <div className="text-wrapper-3">LOGIN</div>
          <img className="line" alt="Line" src="/img/line-1.svg" />
        </div>
        <div className="overlap">
          <div className="text-wrapper-4">NEXT</div>
          <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
        </div>
        <div className="overlap-2">
          <div className="rectangle-2" />
          <img className="username" alt="Username" src="/img/username.png" />
        </div>
        <div className="overlap-3">
          <div className="rectangle-3" />
          <img className="password" alt="Password" src="/img/password.png" />
        </div>
      </div>
    </div>
  );
};
