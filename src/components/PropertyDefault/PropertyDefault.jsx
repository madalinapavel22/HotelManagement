import React from "react";
import "./style.css";

export const PropertyDefault = () =>{
return(
<div className="=property-default">
    <div className="toilet-paper">
        <button className="ellipse">
            <img className="vector" alt="Vector" src="paper.png"/>
        </button>
    </div>
    <div className="div">
        <button className="ellipse">
            <img className="game-icons-towel" alt="Game icon towel" src="towel.png"/>
        </button>
    </div>

    <div className="div">
        <button className="ellipse">
            <img className="game-icons-liquid" alt="Game icon liquid" src="liquid.png"/>
        </button>
    </div>

    <div className="div">
        <button className="ellipse">
            <img className="ic-baseline-plus" alt="Ic baseline plus" src="baseline.png"/>
        </button>
    </div>

</div>
);
};