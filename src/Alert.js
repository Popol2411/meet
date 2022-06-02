import React, { Component, Alert } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <Alert style={this.getStyle()}>{this.props.text}</Alert>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props)
    this.color = 'orange'
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };