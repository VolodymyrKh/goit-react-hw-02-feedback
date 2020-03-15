import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'
import feedbackRate from '../feedbackRate';

const FeedbackOptions = ({ onIncrement }) => (
  <div className={styles.wrapper}>
    <button type="button" className={styles.clickButton} onClick={onIncrement}>
      {feedbackRate.positive}
    </button>
    <button type="button" className={styles.clickButton} onClick={onIncrement}>
      {feedbackRate.middle}
    </button>
    <button type="button" className={styles.clickButton} onClick={onIncrement}>
      {feedbackRate.negative}
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
