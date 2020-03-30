import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'
import feedbackRate from '../feedbackRate';

const FeedbackOptions = ({ options, onIncrement }) => (
  <div className={styles.wrapper}>
    <button type="button" name = {options[0]} className={styles.clickButton} onClick={onIncrement}>
      {feedbackRate.positive}
    </button>
    <button type="button" name = {options[1]} className={styles.clickButton} onClick={onIncrement}>
      {feedbackRate.middle}
    </button>
    <button type="button" name = {options[2]} className={styles.clickButton} onClick={onIncrement}>
      {feedbackRate.negative}
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
