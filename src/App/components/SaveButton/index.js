import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

class SaveButton extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: 'Save Movie',
  };

  render() {
    const {
      children,
      ...props
    } = this.props;
    
    return (
      <IconButton
        {...props}
        icon="heart"
      >
        {children}
      </IconButton>
    );
  }
}

export default SaveButton;
