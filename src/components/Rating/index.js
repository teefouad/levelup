import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classnames from 'classnames';

class Rating extends Component {
  static propTypes = {
    value: PropTypes.number,
    scale: PropTypes.number,
    stars: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    value: 0,
    scale: 10,
    stars: 5,
    className: '',
  };

  render() {
    const {
      value,
      scale,
      stars: starsTotal,
      className,
      ...props
    } = this.props;

    const starsRating = starsTotal * value / scale;
    const starsCount = Math.floor(starsRating);
    const remainder = starsRating - starsCount;
    const halfStar = remainder >= 0.25 && remainder <= 0.75;

    return (
      <div
        title={`${value} / ${scale}`}
        className={classnames('rating', css`
          display: flex;
          align-items: center;
          color: gold;
          ${className};
        `)}
        {...props}
      >
        <div
          className={css`
            position: relative;
            font-size: 16px;
            letter-spacing: 0.2em;
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
            color: rgba(220, 220, 220, 0.6);
          `}
          >
            {Array.from(Array(starsTotal)).map((x, index) => <i key={index} className="fa fa-star" />)}
          </div>
        </div>
        
        <div
          className={css`
            margin-left: 10px;
            font-size: 18px;
          `}
        >
          {value}
        </div>
      </div>
    );
  }
}

export default Rating;
