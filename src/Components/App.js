import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import feedbackRate from './feedbackRate';

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
    switch (e.currentTarget.textContent) {
      case feedbackRate.positive:
        this.setState(state => ({ good: state.good + this.props.step }));
        return;
      case feedbackRate.middle:
        this.setState(state => ({ neutral: state.neutral + this.props.step }));
        return;
      case feedbackRate.negative:
        this.setState(state => ({ bad: state.bad + this.props.step }));
        return;
      default:
        alert('Please check default settings');
    }
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
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions onIncrement={this.handleIncrement} />
        </Section>

        <Section title="Statistics">
          <Statistics
            {...this.state}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
