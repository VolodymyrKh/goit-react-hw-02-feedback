import React from 'react';
import feedbackRate from './../feedbackRate';
import styles from './Statistics.module.css';


const Statistic = ({ data, total, positivePercentage }) => (
  <div className={styles.wrapper}>
    <span>
      {feedbackRate.positive}: {data[feedbackRate.positive.toLowerCase()]}
    </span>
    <span>
      {feedbackRate.middle}: {data[feedbackRate.middle.toLowerCase()]}
    </span>
    <span>
      {feedbackRate.negative}: {data[feedbackRate.negative.toLowerCase()]}
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
