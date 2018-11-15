import React, { Component } from 'react';
import { Router, Link } from "@reach/router"

import DiscoverPage from '../components/DiscoverPage';
import DetailsPage from '../components/DetailsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <DiscoverPage path="/" />
        <DetailsPage path="/movie/:movieId" />
      </Router>
    );
  }
}

export default App;
