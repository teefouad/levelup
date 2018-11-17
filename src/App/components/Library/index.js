import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import store from '../../../store';
import FancyCard from '../FancyCard';

const root = document.createElement('div');
root.id = 'libraryRoot';

class Library extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    visible: false,
    onClose: () => null,
  };

  state = {
    savedMovies: [],
  };

  componentDidMount() {
    document.body.appendChild(root);
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      console.log('Library', state)
      const savedMovies = state.savedMovies;
      this.setState({
        savedMovies,
      })
    });
  }

  componentWillUnmount() {
    root.remove();
    this.unsubscribe();
  }

  render() {
    const {
      visible,
      onClose,
    } = this.props;

    const { savedMovies } = this.state;

    if (!visible) {
      return null;
    }

    return (
      ReactDOM.createPortal(
        <>
          <div
            className={css`
            position: fixed;
            top: 0;
            right: -300px;
            z-index: 1000;
            padding: 30px;
            width: 300px;
            height: 100%;
            overflow-y: auto;
            background: #fff;
            box-shadow: 0 0 2px rgba(0, 0 ,0, 0.2);
            animation: 350ms slideIn cubic-bezier(0.71, 0.01, 0.26, 0.94) forwards;

            @keyframes slideIn {
              to {
                right: 0;
              }
            }
          `}
          >
            {
              savedMovies.map(movie => (
                <FancyCard
                  key={movie.id}
                  {...movie}
                  buttonProps={{
                    movie
                  }}
                />
              ))
            }
          </div>

          <div
            className={css`
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              height: 100%;
              opacity: 0;
              background: rgba(0, 0, 0, 0.2);
              z-index: 999;
              animation: 350ms fadeIn cubic-bezier(0.71, 0.01, 0.26, 0.94) forwards;

              @keyframes fadeIn {
                to {
                  opacity: 1;
                }
              }
            `}
            onClick={onClose}
          />
        </>
      , root)
    );
  }
}

export default Library;
