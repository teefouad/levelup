import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { css } from 'emotion';

import Image from '../Image';
import { getImageURL } from '../../utils/helpers';

class Cover extends Component {
  static propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    image: '',
    alt: '',
    className: '',
    onLoad: () => null,
  };

  state = {
    loading: true,
    dominantColor: '#333',
  };

  getDominantColor = () => {
    const {
      image,
      onLoad,
    } = this.props;

    axios
      .get(getImageURL(image, 'w300'), {
        responseType: 'arraybuffer'
      })
      .then(response => {
        const data = new Buffer(response.data, 'binary').toString('base64');
        const base64 = `data:${response.headers['content-type'].toLowerCase()};base64,${data}`;
        const img = document.createElement('img');

        img.onload = () => {
          const colorThief = new window.ColorThief();

          const componentToHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          };

          const dominantColor = `#${colorThief.getColor(img).map(c => componentToHex(c)).join('')}`;

          this.setState({
            loading: false,
            dominantColor,
          }, () => {
            onLoad();
          });
        };

        img.src = base64;
      });
  };

  handleLoad = () => {
    this.getDominantColor();
  };

  render() {
    const {
      image,
      alt,
      className,
      onLoad,
      ...props
    } = this.props;

    const {
      loading,
      dominantColor,
    } = this.state;

    return (
      <div
        className={css`
          overflow: hidden;
          height: ${loading ? 0 : 'calc(100vh - 80px)'};
          transition: height 800ms cubic-bezier(0.85, 0.01, 0.13, 1);
          background: ${dominantColor};
          ${className};
        `}
        {...props}
      >
        <Image
          src={getImageURL(image, 'original')}
          alt={alt}
          className={css`
            width: 100%;
            min-height: calc(100vh - 80px);
            opacity: ${loading ? 0 : 0.25};
            transition-delay: 800ms;
          `}
          onLoad={this.handleLoad}
        />
      </div>
    );
  }
}

export default Cover;
