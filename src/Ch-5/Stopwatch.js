import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toTimeString } from './helpers';
class Stopwatch extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
    time: 0,
    active: false,
    laps: [],
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState((state) => ({
        time: state.time + 1,
      }));
    }, 10);

    this.setState({
      active: true,
    });
  }

  stopTimer = () => {
    clearInterval(this.interval);

    this.setState({
      active: false,
    });
  }

  resetTimer = () => {
    this.setState({
      time: 0,
      laps: [],
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getSnapshot = () => {
    this.setState((state) => {
      return {
        laps: [
          ...state.laps,
          toTimeString(state.time),
        ]
      }
    })
  }
  
  render() {
    const {
      time,
      active,
      laps,
    } = this.state;

    return (
      <div className="stopwatch">
        <h1>{toTimeString(time)}</h1>

        {
          active ? (
            <button onClick={this.stopTimer}>Stop</button>
          ) : (
            <button onClick={this.startTimer}>Start</button>
          )
        }
        
        <button onClick={this.getSnapshot}>Lap</button>
        <button onClick={this.resetTimer}>Reset</button>

        <ol reversed>
          {
            laps.map((time) => (
              <li key={time}>{time}</li>
            ))
          }
        </ol>
      </div>
    );
  }
}

export default Stopwatch;
