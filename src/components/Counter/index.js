import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { css } from 'emotion';

import Donut from '../Donut';
import { colors } from '../../variables';

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
  };

  static defaultProps = {
    value: 0,
    max: 10,
  };

  render() {
    const {
      value,
      max,
    } = this.props;

    const valueAsString = value > 9 ? '9+' : value;

    return (
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
          `}
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
    );
  }
}

export default Counter;
