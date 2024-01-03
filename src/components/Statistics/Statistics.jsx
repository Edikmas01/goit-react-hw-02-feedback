import { Component } from 'react';
import './Statistics.css'

export class Statistics extends Component {

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total Feedback: {total}</p>
        <p>Positive Feedback Percentage: {positivePercentage}%</p>
      </>
    );
  }
}