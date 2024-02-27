import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./style.css";
import ClockPopup from './ClockPopup'; // Adjust the path accordingly
import ReviewPopup from './ReviewPopup';
import TipsPopup from './TipsPopup';

export const Component2 = ({ property1, className, onTipsSubmit, onClockSubmit, onReviewSubmit }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-10",
    clickCount: 0,
    clickCountRev: 0,
    displayPopup: false,
    displayPopupRev: false,
  });


  const handleFrameClick = () => {
    dispatch("click_39");
  };

  const handleReviewClick = () => {
    dispatch("click_32");
  };

  const handleFrame12Click = () => {
    dispatch("click_12");
  };

  const handleTipsClick = () => {
    dispatch('openTipsPopup');
  };

  const handleTipsSubmit = (amount) => {
    // Handle the submitted tips amount
    onTipsSubmit(amount);
    console.log('Tips Submitted:', amount);
  };

  const handleClockSubmit = (hour,minutes) => {
    // Handle the submitted tips amount
    onClockSubmit(hour,minutes);
    console.log('Hour Submitted:', hour,minutes);
  };

  const handleReviewSubmit = (review) => {
    onReviewSubmit(review);
    console.log('Review Submitted:', review);
  };
  const handleTipsPopupClose = () => {
    console.log("Closing popupTips");
    dispatch('closeTipsPopup');
  };

  const handlePopupClose = () => {
    console.log("Closing popup");
    dispatch("closePopup");
  };

  return (
    <div className={`component2 ${state.property1} ${className}`}>
      <div className="carusel">
        {state.displayPopup && (
          <div className="popup">
            {/* Content for the popup */}
            <div onClick={handlePopupClose}>Close Popup</div>
            {state.property1 === "frame-10" && <ClockPopup onClose={handlePopupClose} onSubmitC={handleClockSubmit}/>}
            {state.property1 === "frame-12" && <ReviewPopup onClose={handlePopupClose} onSubmitR ={handleReviewSubmit} />}
          </div>
        )}
        {state.displayTipsPopup && (
          <div className="popup">
           <div onClick={handleTipsPopupClose}>Close TipsPopUp</div>
            <TipsPopup onClose={handleTipsPopupClose} onSubmitT={handleTipsSubmit} />
          </div>
        )}

        <div
          className={`frame ${state.property1}`}
          onClick={handleFrameClick}
        >
          {state.property1 === "frame-10" && (
            <div className="schedule" onClick={handleFrameClick}>
              {" "}
              Schedule
            </div>
          )}
        </div>

        <div
          className={`div property-1-${state.property1}`}
          onClick={() => {
            dispatch("click");
          }}
        >
          {state.property1 === "frame-11" && (
            <div className="tips"> Leave Tips</div>
          )}
        </div>

        <div
          className={`frame-2 property-1-0-${state.property1}`}
          onClick={handleFrame12Click}
        >
          {state.property1 === "frame-12" && (
            <div className="review" onClick={handleReviewClick}>
              Review
            </div>
          )}
        </div>
      </div>
      <div className="bars">
        <div
          className={`rectangle property-1-1-${state.property1}`}
          onClick={() => {
            dispatch("click_43");
          }}
        />
        <div
          className={`rectangle-2 property-1-2-${state.property1}`}
          onClick={() => {
            dispatch("click_35");
          }}
        />
        <div
          className={`rectangle-4 property-1-3-${state.property1}`}
          onClick={() => {
            dispatch("click_45");
          }}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  const clickCount = state.property1 === "frame-10" ? state.clickCount + 1 : 0;
  const displayPopup = state.property1 === "frame-10" && clickCount > 1;
  const clickCountRev = state.property1 === "frame-12" ? state.clickCountRev + 1 : 0;
  const displayPopupRev = state.property1 === "frame-12" && clickCountRev >= 1;

  switch (action) {
    case "click":
      const clickCount1 = state.property1 === "frame-11" ? state.clickCount1 + 1 : 0;

      // Open popup if click count for frame-10 reaches 2
      const displayTipsPopup = state.property1 === "frame-11" && clickCount1 >= 1;
      return {
        ...state,
        property1: "frame-11",
        clickCount1,
        displayPopup: false,
        displayPopupRev: false,
        displayTipsPopup,
      };

    case "click_32":
      return {
        ...state,
        property1: "frame-12",
        clickCount: 0,
        displayPopup: false,
        clickCountRev,
        displayPopupRev,
        displayTipsPopup: false,
      };

    case "click_35":
      return {
        ...state,
        property1: "frame-11",
        clickCount: 0,
        displayPopup: false,
        displayPopupRev: false,
        displayTipsPopup: false,
      };

    case "click_39":
      return {
        ...state,
        property1: "frame-10",
        clickCount,
        displayPopup,
        displayTipsPopup: false,

      };

    case "click_43":
      return {
        ...state,
        property1: "frame-10",
        clickCount: 0,
        displayPopup: false,
        displayPopupRev: false,
        displayTipsPopup: false,

      };

    case "click_45":
      return {
        ...state,
        property1: "frame-12",
        clickCount: 0,
        displayPopup: false,
        displayPopupRev: false,
        displayTipsPopup: false,

      };

    case "click_12":
      const clickCountFrame12 = state.property1 === "frame-12" ? state.clickCount + 1 : 0;
      const displayPopupFrame12 = state.property1 === "frame-12" && clickCountFrame12 >= 1;

      return {
        ...state,
        property1: "frame-12",
        clickCount: clickCountFrame12,
        displayPopup: displayPopupFrame12,
      };

    case "closePopup":
      return {
        ...state,
        displayPopup: false,
        displayPopupRev: false,
      };
      case "closeTipsPopup":
        return {
          ...state,
          displayPopup: false,
          displayTipsPopup: false,
        };
  }

  return state;
}

Component2.propTypes = {
  property1: PropTypes.oneOf(["frame-12", "frame-11", "frame-10"]),
  onTipsSubmit: PropTypes.func.isRequired,
  onClockSubmit: PropTypes.func.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
};
