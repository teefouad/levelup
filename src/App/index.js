import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import FancyCard from '../components/FancyCard';

class App extends Component {
  render() {
    return (
      <div>
        <FancyCard
          title="Jurassic World: Fallen Kingdom"
          description="Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again."
          image={`https://image.tmdb.org/t/p/original/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg?${Math.random()}`}
          rating={6.5}
          className={css`
            max-width: 280px;
          `}
        />
      </div>
    );
  }
}

export default App;
