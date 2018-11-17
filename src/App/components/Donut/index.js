import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { colors } from '../../../variables';

class Donut extends Component {
  static propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
  };

  static defaultProps = {
    value: 5,
    max: 10,
  };

  render() {
    const {
      value,
      max,
      ...props
    } = this.props;

    const progress = value / max;
    const thickness = 3;
    const radius = 20;
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;

    return (
      <div {...props}>
        <svg
          viewBox={`-${thickness + 1} 0 ${diameter + thickness + 1} ${diameter + thickness + 1}`}
          width={`${diameter}px`}
          height={`${diameter}px`}
          className={css`
            display: block;
          `}
        >
          <path
            d={`M18 2.0845
              a ${radius} ${radius} 0 0 1 0 ${diameter}
              a ${radius} ${radius} 0 0 1 0 -${diameter}`}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth={thickness}
          />

          <path
            d={`M18 2.0845
              a ${radius} ${radius} 0 0 1 0 ${diameter}
              a ${radius} ${radius} 0 0 1 0 -${diameter}`}
            fill="none"
            stroke={colors.primary}
            strokeWidth={thickness}
            strokeDasharray={circumference}
            strokeLinecap="round"
            className={css`
              stroke-dashoffset: ${circumference * (1 - progress)};
              transition: stroke-dashoffset 400ms ease-in-out;
            `}
          />
        </svg>
      </div>
    );
  }
}

export default Donut;
