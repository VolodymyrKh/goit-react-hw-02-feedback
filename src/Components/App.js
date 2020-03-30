import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
// import feedbackRate from './feedbackRate';

// const good = feedbackRate.positive.toLowerCase();
// const neutral = feedbackRate.middle.toLowerCase();
// const bad = feedbackRate.negative.toLowerCase();

export default class App extends Component {
  static defaultProps = {
    step: 1,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    step: PropTypes.number,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = e => {
    const buttonLabel = e.target.name;
    this.setState(state => ({
      [buttonLabel]: state[buttonLabel] + this.props.step,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() === 0
      ? 0
      : (this.state.good * 100) / this.countTotalFeedback();

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round(
      this.countPositiveFeedbackPercentage(),
    );
    const options = Object.keys(this.state);
   
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={options} onIncrement={this.handleIncrement} />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
