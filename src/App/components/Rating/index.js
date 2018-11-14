import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

class Rating extends Component {
  static propTypes = {
    value: PropTypes.number,
    scale: PropTypes.number,
    stars: PropTypes.number,
  };

  static defaultProps = {
    value: 0,
    scale: 10,
    stars: 5,
  };

  render() {
    const {
      value,
      scale,
      stars: starsTotal,
    } = this.props;

    const starsRating = starsTotal * value / scale;
    const starsCount = Math.floor(starsRating);
    const remainder = starsRating - starsCount;
    const halfStar = remainder >= 0.25 && remainder <= 0.75;

    return (
      <div
        title={`${value} / ${scale}`}
        className={css`
          display: flex;
        `}
      >
        <div
          className={css`
            position: relative;
          `}
        >
          <div
            className={css`
            position: absolute;
            color: gold;
          `}
          >
            {Array.from(Array(starsCount + (remainder > 0.75 ? 1 : 0))).map((x, index) => <i key={index} className="fa fa-star" />)}
            {
              halfStar && <i className="fa fa-star-half" />
            }
          </div>

          <div
            className={css`
            color: #f0f0f0;
          `}
          >
            {Array.from(Array(starsTotal)).map((x, index) => <i key={index} className="fa fa-star" />)}
          </div>
        </div>
        
        <p
          className={css`
            margin-left: 10px;
            color: gold;
          `}
        >
          {value}
        </p>
      </div>
    );
  }
}

export default Rating;
