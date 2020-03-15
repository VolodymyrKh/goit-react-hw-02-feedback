import React from 'react';
import feedbackRate from './../feedbackRate';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
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

  </>
);

export default Statistic;
