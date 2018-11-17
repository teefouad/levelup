import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import IconButton from '../IconButton';
import { SAVE_MOVIE, REMOVE_MOVIE } from './actionTypes';
import store from '../../../store';

class SaveButton extends Component {
  static propTypes = {
    movie: PropTypes.object,
  };

  static defaultProps = {
    movie: {},
  };

  state = {
    isSaved: false,
  };
  
  handleClick = () => {
    store.dispatch({
      type: this.state.isSaved ? REMOVE_MOVIE : SAVE_MOVIE,
      movie: this.props.movie,
    })
  }

  componentDidMount() {
    const updateState = () => {
      const state = store.getState();
      const savedMovies = state.savedMovies;
      const isSaved = (savedMovies.findIndex(m => m.id === this.props.movie.id) !== -1);

      this.setState({ isSaved });
    };

    this.unsubscribe = store.subscribe(updateState)

    // updateState();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const {
      children,
      movie,
      ...props
    } = this.props;
  
    const isSaved = this.state.isSaved;
    
    return (
      <IconButton
        {...props}
        icon={isSaved ? 'trash' : 'heart'}
        onClick={this.handleClick}
        color={isSaved ? '#f00' : null}
        hoverColor={isSaved ? '#f66' : null}
        activeColor={isSaved ? '#f00' : null}
      >
        {
          isSaved ? 'Remove Movie' : 'Save Movie?'
        }
      </IconButton>
    );
  }
}

export default SaveButton;
