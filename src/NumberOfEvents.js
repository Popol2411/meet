import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: '32',
    infoText: '',
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: number,
        infoText: 'Enter a number between 1 and 32',
      });
    } else {
      this.setState({
        numberOfEvents: number,
        infoText: '',
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };


  render() {
    return (
      <div className="NumberOfEvents">
        <h4>Number of events to display</h4>
        <input
        min={1}
        max={32}
          className="number-of-events"
          type="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;