import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
    now: new Date(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addZero = (value) => {
    return value < 10 ? `0${value}` : value;
  }

  render() {
    const {
      now,
    } = this.state;

    let hours = now.getHours();
    let meridiem = '';

    if (hours > 12) {
      hours -= 12;
      meridiem = 'pm';
    } else {
      meridiem = 'am';
    }

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return (
      <h1>{this.addZero(hours)}:{this.addZero(minutes)}:{this.addZero(seconds)} {meridiem}</h1>
    );
  }
}

export default Clock;
