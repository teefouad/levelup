import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
  };
  
  static defaultProps = {
    count: 0,
    min: -Infinity,
    max: Infinity,
    step: 1,
  };

  constructor(props) {
    super(props);

    this.state = {
      count: this.capValue(this.props.initialCount),
    };
  }
  
  capValue = (value) => {
    const {
      min,
      max,
    } = this.props;

    // if (value < min) return min;
    // if (value > max) return max;
    return value;
  }

  increaseCount = () => {
    const {
      max,
    } = this.props;
    
    this.setState((newState) => ({
      count: this.capValue(newState.count + this.props.step),
    }));
  };

  resetCount = () => {
    this.setState({
      count: this.props.initialCount,
    });
  };

  decreaseCount = () => {
    this.setState((newState) => ({
      count: this.capValue(newState.count - this.props.step),
    }));
  };

  render() {
    const {
      count,
    } = this.state;

    const {
      min,
      max,
    } = this.props;

    return (
      <div className="ex-3">
        <p>{count}</p>

        <button
          onClick={this.decreaseCount}
          disabled={count <= min}
        >
          <i className="fa fa-minus" />
        </button>

        <button onClick={this.resetCount}>
          <i className="fa fa-undo" />
        </button>

        <button
          disabled={count >= max}
          onClick={this.increaseCount}
        >
          <i className="fa fa-plus" />
        </button>
      </div>
    );
  }
}

export default Counter;
