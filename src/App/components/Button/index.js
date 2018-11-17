import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { colors } from '../../../variables';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    activeColor: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    className: '',
    color: null,
    hoverColor: null,
    activeColor: null,
    children: null,
  };

  render() {
    const {
      className,
      children,
      color,
      hoverColor,
      activeColor,
      ...props
    } = this.props;

    return (
      <button
        className={css`
          position: relative;
          display: inline-flex;
          height: 40px;
          padding: 0 15px;
          outline: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          color: #fff;
          border: none;
          background: ${color || colors.primary};
          border-radius: 5px;
          transition: background-color 150ms;

          &:hover,
          &:focus {
            background: ${hoverColor || colors.primaryLight};
          }

          &:active {
            background: ${activeColor || colors.primary};
          }

          &[disabled] {
            opacity: 0.4;
            pointer-events: none;
            user-select: none;
          }

          ${className};
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
