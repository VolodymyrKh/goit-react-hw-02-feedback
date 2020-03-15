import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({onIncrement}) => (
  <>
    <button type="button" onClick={onIncrement}>
          Good
        </button>
        <button type="button" onClick={onIncrement}>
          Neutral
        </button>
        <button type="button" onClick={onIncrement}>
          Bad
        </button>
  </>
);

FeedbackOptions.propTypes = {
 onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
