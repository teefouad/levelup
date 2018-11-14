import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './components/Rating';
import Counter from './components/Counter';

class App extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div>
        <Counter value={5} />
        <Counter value={0} />
        <Counter value={10} max={100} />
      </div>
    );
  }
}

export default App;
