import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Rating from './components/Rating';
import Counter from './components/Counter';
import Button from './components/Button';
import IconButton from './components/IconButton';
import SaveButton from './components/SaveButton';
import Image from './components/Image';
import SimpleCard from './components/SimpleCard';

class App extends Component {
  render() {
    return (
      <div>
        <SimpleCard
          title="Some movie"
          image={`https://image.tmdb.org/t/p/original/dCtFvscYcXQKTNvyyaQr2g2UacJ.jpg?${Math.random()}`}
          rating={6.5}
          className={css`
            max-width: 200px;
          `}
        />
      </div>
    );
  }
}

export default App;
