import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "./style.css";

const Checkbox = ({ index, className, onStatusChange }) => {
  const localStorageKey = `checkboxState_${index}`;
  const [isChecked, setIsChecked] = useState(() => {
    const storedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    const { checked, timestamp } = storedState;

    const isWithinDuration = timestamp && Date.now() - timestamp < 9 * 60 * 60 * 1000;

    return checked && isWithinDuration;
  });

  useEffect(() => {
    const timestamp = Date.now();
    localStorage.setItem(localStorageKey, JSON.stringify({ checked: isChecked, timestamp }));
  }, [isChecked, localStorageKey]);

  const handleClick = () => {
    const newState = !isChecked;
    setIsChecked(newState);

    if (onStatusChange) {
      onStatusChange(newState ? 1 : 0);
    }
  };

  return (
    <img
      className={`checkbox ${className}`}
      alt={`State ${isChecked ? "checked" : "default"}`}
      src={
        isChecked
          ? "https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a03ae3cbd2bbc990195f40/img/state-checked@2x.png"
          : "https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a03ae3cbd2bbc990195f40/img/state-default@2x.png"
      }
      onClick={handleClick}
    />
  );
};

Checkbox.propTypes = {
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  onStatusChange: PropTypes.func,
};

export default Checkbox;
