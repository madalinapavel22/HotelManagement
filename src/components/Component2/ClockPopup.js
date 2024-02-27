import React, { useState, useEffect } from 'react';
import './TipsPopup.css'; // Add a separate CSS file for styling
import PropTypes from 'prop-types';
// ... (other imports)

const ClockPopup = ({ onClose,onSubmitC }) => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [inputHour, setInputHour] = useState('');
  const [inputMinute, setInputMinute] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getFormattedTime() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const formattedTime = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    return formattedTime;
  }

  const handleHourChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || (/^\d+$/.test(inputValue) && inputValue >= 0 && inputValue <= 23)) {
      setInputHour(inputValue);
    }
  };

  const handleSubmit = () => {
      onSubmitC(inputHour,inputMinute);
      onClose();
  };

  
  const handleCloseButtonClick = () => {
    onClose();
};

  const handleMinuteChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || (/^\d+$/.test(inputValue) && inputValue >= 0 && inputValue <= 59)) {
      setInputMinute(inputValue);
    }
  };

  const handleButtonClick = () => {
    // Validate the selected time before handling submission
    if (inputHour !== '' && inputMinute !== '') {
      const selectedTime = `${inputHour}:${inputMinute}`;
      console.log(`Selected Time: ${selectedTime}`);

      // You can also close the popup after submission if needed
      onClose();
    } else {
      // Handle validation error (e.g., display a message to the user)
      console.error('Invalid time selected. Please fill in both hours and minutes.');
    }
  };

  const isSubmitDisabled = !(inputHour !== '' && inputMinute !== '');

  return (
    <div className="popup">
      <div className="clock">
        <h1>{currentTime}</h1>
      </div>
      <div>
        <label htmlFor="hour">Hour:</label>
        <input
          type="number"
          id="hour"
          value={inputHour}
          onChange={handleHourChange}
          min="0"
          max="23"
        />
      </div>
      <div>
        <label htmlFor="minute">Minute:</label>
        <input
          type="number"
          id="minute"
          value={inputMinute}
          onChange={handleMinuteChange}
          min="0"
          max="59"
        />
      </div>
      <div>
        <button className={`submit-btn ${isSubmitDisabled ? 'disabled' : ''}`} onClick={handleSubmit} disabled={isSubmitDisabled}>
          Submit
        </button>
      </div>
      <div className="close-btn" onClick={handleCloseButtonClick}>
        Close Popup
      </div>
    </div>
  );
};
ClockPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmitC: PropTypes.func.isRequired,
};

export default ClockPopup;
