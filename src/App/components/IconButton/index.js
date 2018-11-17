import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { css } from 'emotion';

import Button from '../Button';

class IconButton extends Component {
  static propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    icon: '',
    className: '',
    children: null,
  };

  render() {
    const {
      icon,
      className,
      children,
      ...props
    } = this.props;

    return (
      <Button
        className={css`
          padding: 0 15px 0 ${icon ? '55px' : '15px'};
          ${className};
        `}
        {...props}
      >
        {
          icon && (
            <i
              className={classnames(`fa fa-${icon}`, css`
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                font-size: 18px;
                background: rgba(0, 0, 0, 0.04);
              `)}
            />
          )
        }

        {children}
      </Button>
    );
  }
}

export default IconButton;
