import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  };

  handleFeedback = feedbackType => {
    console.log(feedbackType);
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };



  render() {
        const { good, neutral, bad } = this.state;

        const countTotalFeedback = () => good + neutral + bad;

        const countPositiveFeedbackPercentage =( ) =>
          countTotalFeedback() === 0 ? 0 : Math.round((good / countTotalFeedback()) * 100);
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          color: '#010101',
          marginLeft: '15px'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!countTotalFeedback() ? ( 
            <Notification message="There is no feedback" />
           ):( 
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
};

