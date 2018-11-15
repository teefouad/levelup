import React, { Component } from 'react';
import { Router } from '@reach/router';

import CounterContext from '../contexts/CounterContext';
import Header from '../components/Header';
import DiscoverPage from '../components/DiscoverPage';
import GenrePage from '../components/GenrePage';
import DetailsPage from '../components/DetailsPage';

class App extends Component {
  state = {
    savedMovies: [],
  };

  getCounterApi = () => ({
    savedMovies: this.state.savedMovies,
    saveMovie: (id) => {
      this.setState((state) => ({
        savedMovies: [
          ...state.savedMovies,
          id,
        ],
      }));
    },
  });
  
  render() {
    return (
      <CounterContext.Provider value={this.getCounterApi()}>
        <Header />

        <Router>
          <DiscoverPage path="/" />
          <DetailsPage path="/movie/:movieId" />
          <GenrePage path="/genre/:genreId" />
        </Router>
      </CounterContext.Provider>
    );
  }
}

export default App;
