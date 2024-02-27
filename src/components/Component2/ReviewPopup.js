import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const ReviewPopup = ({ onClose, onSubmitR }) => {
  function getFormattedTime() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';
    const formattedTime = `${h % 12 || 12}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s} ${ampm}`;
    return formattedTime;
  }

  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [inputReview, setInputReview] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleReviewChange = (e) => {
    setInputReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    // Handle the submission logic here
    // You can pass the review text to a parent component or perform any other action
    // For now, let's just log the entered review
    console.log('Submitted Review:', inputReview);

    // You can also close the popup after submission if needed
    onClose();
  };

  const handleSubmit = () => {
    onSubmitR(inputReview);
    console.log('Submitted Review:', inputReview);
    onClose();
};

  const handleCloseButtonClick = () => {
    onClose();
  };

  const isSubmitDisabled = !(inputReview.trim() !== '');

  return (
    <div className="popupR-review">
      <div>
        <p className="review-message">Please leave a review:</p>
        <textarea
          id="reviewInput"
          onChange={handleReviewChange}
          value={inputReview}
          placeholder="Type your review here..."
        />
      </div>
      <div>
        <button className={`submit-btn ${isSubmitDisabled ? 'disabled' : ''}`} onClick={handleSubmit} disabled={isSubmitDisabled}>
          Submit Review
        </button>
      </div>
      <div className="close-btn" onClick={handleCloseButtonClick}>
        Close Popup
      </div>
    </div>
  );
};
ReviewPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmitR: PropTypes.func.isRequired,
};

export default ReviewPopup;
