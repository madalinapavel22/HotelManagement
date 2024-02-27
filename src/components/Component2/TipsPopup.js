import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TipsPopup.css'; // Add a separate CSS file for styling

const TipsPopup = ({ onClose, onSubmitT }) => {
  const [tipsAmount, setTipsAmount] = useState('');

  const handleAmountChange = (e) => {
    setTipsAmount(e.target.value);
  };

  const handleSubmit = () => {
    if (parseFloat(tipsAmount) > 0) {
      onSubmitT(parseFloat(tipsAmount));
      
      handleClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  // Check if the tipsAmount is a valid positive number to enable/disable the submit button
  const isSubmitDisabled = !(parseFloat(tipsAmount) > 0);

  return (
    <div className="popup">
      <div>
        <label htmlFor="tipsAmount">Tips Amount (€):</label>
        <input
          type="text"
          id="tipsAmount"
          value={tipsAmount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="buttons-container">
        <button className={`submit-btn ${isSubmitDisabled ? 'disabled' : ''}`} onClick={handleSubmit} disabled={isSubmitDisabled}>
          Submit Tips
        </button>
        <div className="close-btn" onClick={handleClose}>
          Close Popup
        </div>
      </div>
    </div>
  );
};

TipsPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmitT: PropTypes.func.isRequired,
};

export default TipsPopup;