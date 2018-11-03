import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabs from '../Ch-4';
import Clock from './Clock';
import Stopwatch from './Stopwatch';

class Timer extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
    activeIndex: 0
  }

  render() {
    const {
      activeIndex,
    } = this.state;

    return (
      <>
        <Tabs tabs={['Clock', 'Stopwatch']}
          onTabClick={(index) => {
            this.setState({
              activeIndex: index
            })
          }}
         />

        {
          activeIndex === 0 && <Clock />
        }
        {
          activeIndex === 1 && <Stopwatch />
        }
      </>
    );
  }
}

export default Timer;
