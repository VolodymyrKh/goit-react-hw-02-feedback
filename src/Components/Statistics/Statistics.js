import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad }) => (
  <>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
  </>
);

export default Statistic;
