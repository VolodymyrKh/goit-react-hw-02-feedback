import React from 'react';
import PropTypes from 'prop-types';
import feedbackRate from '../feedbackRate';

const FeedbackOptions = ({ onIncrement }) => (
  <>
    <button type="button" onClick={onIncrement}>
      {feedbackRate.positive}
    </button>
    <button type="button" onClick={onIncrement}>
      {feedbackRate.middle}
    </button>
    <button type="button" onClick={onIncrement}>
      {feedbackRate.negative}
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
