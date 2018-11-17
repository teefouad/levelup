import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

class Image extends Component {
  static propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    alt: '',
    className: '',
    onLoad: () => null,
  };

  state = {
    loading: false,
  };

  handleLoad = (e) => {
    const {
      onLoad,
    } = this.props;

    onLoad(e);

    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
  }

  render() {
    const {
      alt,
      className,
      ...props
    } = this.props;

    const {
      loading,
    } = this.state;

    return (
      <img
        alt={alt}
        className={css`
          display: block;
          max-width: 100%;
          opacity: ${loading ? 0 : 1};
          transition: opacity 500ms;
          ${className};
        `}
        {...props}
        onLoad={this.handleLoad}
      />
    );
  }
}

export default Image;
