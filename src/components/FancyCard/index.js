import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { Link } from '@reach/router';

import Image from '../Image';
import Spinner from '../Spinner';
import Rating from '../Rating';
import SaveButton from '../SaveButton';
import { colors } from '../../variables';

class FancyCard extends Component {
  static propTypes = {
    movieId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    link: PropTypes.string,
    className: PropTypes.string,
    onButtonClick: PropTypes.func,
  };

  static defaultProps = {
    movieId: '',
    title: '',
    description: '',
    image: '',
    rating: 0,
    link: '',
    className: '',
    onButtonClick: () => null,
  };

  state = {
    imageLoading: true,
  };

  render() {
    const {
      movieId,
      title,
      description,
      image,
      rating,
      link,
      onButtonClick,
      className,
      ...props
    } = this.props;

    const {
      imageLoading,
    } = this.state;

    return (
      <section
        className={css`
          padding: 0 20px;
          ${className}
        `}
        {...props}
      >
        <Link
          to={link}
          className={css`
            position: relative;
            perspective: 950;
            perspective-origin: center 155px;
            display: block;
            cursor: pointer;
            border-radius: 10px;
          `}
        >
          <span
            className={css`
              display: block;
              background: ${colors.primaryDark};
              border-radius: inherit;
              transition: all 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);

              a:hover > & {
                transform: rotateY(180deg);
              }
            `}
          >
            <Image
              src={image}
              alt={title}
              width={240}
              height={359}
              className={css`
                border-radius: inherit;
              `}
              onLoad={() => this.setState({ imageLoading: false })}
            />

            {
              imageLoading && <Spinner />
            }
          </span>

          <span
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              padding: 20px;
              font-size: 13px;
              text-align: center;
              text-shadow: 0 1px 0px rgba(0, 0, 0, 0.25);
              color: #fff;
              background: rgba(0, 0, 0, 0.7);
              border-radius: inherit;
              transform: rotateY(-180deg);
              backface-visibility: hidden;
              transition: all 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);

              &:before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                opacity: 0.4;
                z-index: -1;
                background: ${colors.primary};
                box-shadow: inset 0 -300px 200px -200px rgba(0, 0, 0, 0.5);
                border-radius: inherit;
              }

              a:hover > & {
                transform: rotateY(0);
              }
            `}
          >
            {description.length > 300 ? `${description.slice(0, 300)}...` : description}
          </span>
        </Link>

        <div
          className={css`
            padding: 170px 20px 20px;
            margin: -150px -20px 0;
            text-align: center;
            border: 1px solid #e6e6e6;
            background: #fff;
            border-radius: 10px;
          `}
        >
          <h1
            className={css`
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            `}
            title={title}
          >
            <Link
              to={link}
              className={css`
                text-decoration: none;
                color: inherit;
                transition: color 200ms;

                &:hover {
                  color: ${colors.primary};
                }
              `}
            >
              {title}
            </Link>
          </h1>

          <Rating
            value={rating}
            className={css`
              margin: 6px 0 15px;
              justify-content: center;
            `}
          />

          <SaveButton onClick={onButtonClick} movieId={movieId} />
        </div>
      </section>
    );
  }
}

export default FancyCard;
