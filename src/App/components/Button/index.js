import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { colors } from '../../../variables';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    className: '',
    children: null,
  };

  render() {
    const {
      className,
      children,
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
          font-size: 14px;
          color: #fff;
          border: none;
          background: ${colors.primary};
          border-radius: 5px;
          transition: background-color 150ms;
          ${className};

          &:hover,
          &:focus {
            background: ${colors.primaryLight};
          }

          &:active {
            background: ${colors.primary};
          }
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
