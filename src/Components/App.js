import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import feedbackRate from './feedbackRate'

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
    }
  };

  render() {
    // const { good, neutral, bad } = this.state;
    // const { step } = this.props;
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions onIncrement = {this.handleIncrement} />
        </Section>

        <Section title="Statistics">
          <Statistics {...this.state}/>
        </Section>
        {/* <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span> */}
        {/* <button type="button" onClick={this.handleIncrement}>
              Good
            </button>
            <button type="button" onClick={this.handleIncrement}>
              Neutral
            </button>
            <button type="button" onClick={this.handleIncrement}>
              Bad
            </button> */}
      </>
    );
  }
}
{
  /* <>
<Section title = "Please leave your feedback">
 <FeedbackOptions onIncrement ={this.handleIncrement}/>
</Section>

<Section title = "Statistics">
<Statistics/>
</Section>

</>
); */
}
