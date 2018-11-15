import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Image from '../Image';
import Rating from '../Rating';
import Spinner from '../Spinner';
import { colors } from '../../variables';

class SimpleCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    image: '',
    rating: 0,
    className: '',
  };

  state = {
    imageLoading: true,
  };

  render() {
    const {
      title,
      image,
      rating,
      className,
      ...props
    } = this.props;

    const {
      imageLoading,
    } = this.state;

    return (
      <section
        className={css`
          position: relative;
          overflow: hidden;
          cursor: pointer;
          color: #fff;
          background: #333;
          border-radius: 10px;

          &:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 1;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 50%) no-repeat;
            transition: all 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);
          }

          &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 1;
            opacity: 0;
            background: ${colors.primary};
            box-shadow: inset 0 -300px 200px -200px rgba(0, 0, 0, 0.5);
            transition: opacity 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);
          }

          &:hover {
            &:before {
              top: -50%;
              opacity: 0.5;
            }

            &:after {
              opacity: 0.6;
            }
          }

          ${className};
        `}
        {...props}
      >
        <Image
          src={image}
          alt={title}
          className={css`
            transform: scale(1.1);
            transform-origin: center top;
            transition: opacity 500ms, transform 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);

            section:hover > & {
              transform: scale(1);
            }
          `}
          onLoad={() => this.setState({ imageLoading: false })}
        />

        {
          imageLoading && <Spinner />
        }

        <h1
          className={css`
            position: absolute;
            right: 0;
            left: 0;
            bottom: 20px;
            z-index: 2;
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            transition: transform 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);

            section:hover > & {
              transform: translate(0, -30px);
            }
          `}
        >
          {title}
        </h1>

        <Rating
          value={rating}
          className={css`
            position: absolute;
            bottom: -50px;
            right: 0;
            left: 0;
            z-index: 2;
            height: 50px;
            opacity: 0;
            color: inherit;
            transition: opacity 500ms, transform 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);

            section:hover > & {
              opacity: 1;
              transform: translate(0, -55px);
              transition-delay: 200ms, 0ms;
            }
          `}
        />
      </section>
    );
  }
}

export default SimpleCard;
