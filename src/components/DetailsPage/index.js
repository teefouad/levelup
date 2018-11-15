import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { css } from 'emotion';

import Spinner from '../Spinner';
import Cover from '../Cover';
import Rating from '../Rating';
import SaveButton from '../SaveButton';
import SimpleCard from '../SimpleCard';
import api from '../../utils/api';
import { getImageURL } from '../../utils/helpers';

const Divider = () => (
  <hr
    className={css`
      margin: 30px 0;
      border: none;
      border-top: 1px solid #e6e6e6;
    `}
  />
);

class DetailsPage extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  };

  static defaultProps = {
    movieId: '',
  };

  initialState = {
    loading: true,
    movieData: {},
    loadingSimilarMovies: true,
    similarMovies: [],
  };

  state = this.initialState;

  loadMovieData = () => {
    const {
      movieId,
    } = this.props;

    this.setState(this.initialState);

    api.getMovie(movieId).then((data) => {
      this.setState({
        movieData: data,
      });
    });

    api.getSimilarMovies(movieId).then((data) => {
      this.setState({
        loadingSimilarMovies: false,
        similarMovies: data.results,
      })
    });
  }
  
  componentDidMount() {
    this.loadMovieData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movieId !== this.props.movieId) {
      this.loadMovieData();
      window.scrollTo(0, 0);
    }
  }

  render() {
    const {
      movieId,
    } = this.props;

    const {
      loading,
      movieData,
      loadingSimilarMovies,
      similarMovies,
    } = this.state;

    const {
      title,
      tagline,
      vote_average: rating,
      backdrop_path: image,
      release_date: releaseDate,
      overview,
      genres = [],
    } = movieData;
    
    return (
      <div
        className={css`
          padding: 80px 0;
        `}
      >
        {
          image && (
            <Cover
              image={image}
              alt={title}
              onLoad={() => this.setState({ loading: false })}
            />
          )
        }

        {
          loading && (
            <Spinner
              className={css`
                transform: scale(2);
              `}
            />
          )
        }

        <h1
          className={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            align-content: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 600px;
            height: calc(100vh - 80px);
            margin: 0 auto;
            font-size: 48px;
            line-height: 1.2;
            text-align: center;
            text-shadow: 0 1px 0px rgba(0, 0, 0, 0.25);
            color: #fff;
            opacity: ${loading ? 0 : 1};
            pointer-events: ${loading ? 'none' : ''};
            transition: ${loading ? 'none' : 'opacity 200ms linear 800ms'};
          `}
        >
          {title}

          <small
            className={css`
              flex: 0 0 100%;
              margin-top: 20px;
              font-size: 20px;
              font-style: italic;
              color: rgba(255, 255, 255, 0.85);
            `}
          >{tagline}</small>
        </h1>

        <div
          className={css`
            position: relative;
            z-index: 9;
            max-width: 700px;
            padding: 40px;
            margin: -120px auto 0;
            font-size: 14px;
            border: 1px solid #e6e6e6;
            background: #fff;
            border-radius: 10px;
            opacity: ${loading ? 0 : 1};
            pointer-events: ${loading ? 'none' : ''};
            transform: ${loading ? 'translate(0, -10px)' : 'translate(0, 0)'};
            transition: ${loading ? 'none' : 'opacity 200ms linear 500ms, transform 400ms cubic-bezier(0.11, 0.35, 0.32, 1) 500ms'};

            strong {
              font-weight: 600;
            }
          `}
        >

          <div
            className={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <div>
              <Rating value={rating} />
              Released {releaseDate}
            </div>

            <SaveButton movieId={movieId} />
          </div>

          <Divider />

          <div
            className={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <strong
              className={css`
                font-size: 16px;
              `}
            >
              Genres
            </strong>

            <ul
              className={css`
                list-style: none;
                display: flex;
              `}
            >
              {genres.map((genre) => (
                <li key={genre.id}>
                  <Link
                    to={`/genre/${genre.id}`}
                    className={css`
                      padding: 5px 10px;
                      font-size: 12px;
                      font-weight: 600;
                      line-height: 1;
                      text-decoration: none;
                      color: inherit;
                      background: #f0f0f0;
                      border-radius: 5px;
                      transition: background-color 200ms;

                      &:hover {
                        background: #e6e6e6;
                      }

                      &:active {
                        background: #f0f0f0;
                      }

                      li + li & {
                        margin-left: 3px;
                      }
                    `}
                  >
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Divider />

          <div>
            <strong
              className={css`
                font-size: 16px;
              `}
            >
              Overview
            </strong>

            <p>
              {overview}
            </p>
          </div>

          {
            similarMovies.length > 0 && (
              <>
                <Divider />

                <div>
                  <strong
                    className={css`
                      font-size: 20px;
                    `}
                  >
                    Similar Movies
                  </strong>

                  {
                    loadingSimilarMovies ? (
                      <div>Fetching similar movies...</div>
                    ) : (
                        <div
                          className={css`
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            grid-gap: 30px;
                            margin: 20px 0 0;
                          `}
                        >
                          {
                            similarMovies.slice(0, 6).map((movie) => (
                              <SimpleCard
                                key={movie.title}
                                title={movie.title}
                                image={getImageURL(movie.poster_path, 'w780')}
                                rating={movie.vote_average}
                                onClick={() => {
                                  this.props.navigate(`/movie/${movie.id}`);
                                }}
                              />
                            ))
                          }
                        </div>
                    )
                  }
                </div>
              </>
            )
          }

        </div>
      </div>
    );
  }
}

export default DetailsPage;
