import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CounterContext from '../../contexts/CounterContext';
import IconButton from '../IconButton';

class SaveButton extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  };

  static defaultProps = {
    movieId: '',
  };

  static contextType = CounterContext;

  handleClick = () => {
    const {
      movieId,
    } = this.props;

    this.context.saveMovie(movieId);
  }

  render() {
    const {
      movieId,
      children,
      ...props
    } = this.props;

    const {
      savedMovies,
    } = this.context;

    const saved = savedMovies.includes(movieId);
    
    return (
      <IconButton
        {...props}
        icon={saved ? 'check' : 'heart'}
        disabled={saved}
        onClick={this.handleClick}
      >
        {
          saved ? 'Movie Saved' : 'Save Movie?'
        }
      </IconButton>
    );
  }
}

export default SaveButton;
