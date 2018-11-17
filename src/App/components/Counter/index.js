import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { css } from 'emotion';

import store from '../../../store';
import Donut from '../Donut';
import Library from '../Library';
import { colors } from '../../../variables';

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
  };

  static defaultProps = {
    value: 0,
    max: 10,
  };

  state = {
    libraryVisible: false,
    savedMoviesCount: 0,
  };

  handleClick = () => {
    this.setState((state) => ({
      libraryVisible: !state.libraryVisible,
    }));

    setTimeout(() => {
      store.dispatch({
        type: 'LIBRARY_TOGGLE',
      })
    }, 100)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        savedMoviesCount: store.getState().savedMovies.length,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const {
      max,
    } = this.props;

    const value = this.state.savedMoviesCount;

    const valueAsString = value > 9 ? '9+' : value;

    return (
      <>
        <div
          className={css`
            display: flex;
            align-items: center;
          `}
          title={`${value} of ${max}`}
        >
          {
            value > 0 && (
              <span
                className={css`
                  width: 24px;
                  height: 24px;
                  margin-right: 5px;
                  font-size: 12px;
                  line-height: 24px;
                  text-align: center;
                  letter-spacing: -0.05em;
                  color: #fff;
                  background: ${colors.primary};
                  border-radius: 99px;
                `}
              >
                {valueAsString}
              </span>
            )
          }

          <div
            className={css`
              position: relative;
              cursor: pointer;
            `}
            onClick={this.handleClick}
          >
            <Donut
              value={value}
              max={max}
            />

            <i className={classnames('fa fa-heart', css`
              position: absolute;
              top: 50%;
              left: 50%;
              margin-top: 1px;
              font-size: 18px;
              color: ${colors.primary};
              transform: translate(-50%, -50%);
            `)} />
          </div>
        </div>

        <Library
          visible={this.state.libraryVisible}
          onClose={() => this.setState({ libraryVisible: false })}
        />
      </>
    );
  }
}

export default Counter;
