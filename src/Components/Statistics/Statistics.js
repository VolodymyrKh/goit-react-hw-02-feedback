import React from 'react';
import feedbackRate from './../feedbackRate';
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

export default Statistic;
