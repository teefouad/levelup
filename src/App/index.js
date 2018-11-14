import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './components/Rating';
import Counter from './components/Counter';
import Button from './components/Button';
import IconButton from './components/IconButton';
import SaveButton from './components/SaveButton';

class App extends Component {
  render() {
    return (
      <div>
        <SaveButton />
        <IconButton icon="star" onClick={() => alert('IconButton')}>IconButton</IconButton>
        <Button onClick={() => alert('Button')}>Button</Button>
        <SaveButton onClick={() => alert('s')}>Test</SaveButton>
      </div>
    );
  }
}

export default App;
