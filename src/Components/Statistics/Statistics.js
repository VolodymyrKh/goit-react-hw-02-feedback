import React from 'react';
import feedbackRate from './../feedbackRate';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.wrapper}>
    <span>
      {feedbackRate.positive}: {good}
    </span>
    <span>
      {feedbackRate.middle}: {neutral}
    </span>
    <span>
      {feedbackRate.negative}: {bad}
    </span>
    <span>
      {feedbackRate.general}: {total}
    </span>
    <span>
      {feedbackRate.percentagePositive}: {positivePercentage}%
    </span>

  </div>
);

Statistic.propTypes ={
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,

}

export default Statistic;
