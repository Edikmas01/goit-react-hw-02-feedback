import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    const buttons = Object.keys(options);

    return (
      <>
        {buttons.map(button => (
          <button
            key={button}
            type="button"
            className="bnt-feedbeck"
            onClick={() => onLeaveFeedback(button)}
          >
            {button[0].toUpperCase() + button.slice(1)}
          </button>
        ))}
      </>
    );
  }
}
