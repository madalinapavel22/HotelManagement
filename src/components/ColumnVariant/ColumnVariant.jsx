import React from "react";
import "./style.css";

export const ColumnVariant = ({ className }) => {
  return (
    <div className={`column-variant ${className}`}>
      <div className="table-body">
        <br />
        Table body
      </div>
    </div>
  );
};