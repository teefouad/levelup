import React, { Component } from 'react';
import { css } from 'emotion';

import FancyCardsList from '../FancyCardsList';
import Button from '../Button';
import api from '../../utils/api';
import { getImageURL } from '../../utils/helpers';

class DiscoverPage extends Component {
  state = {
    page: 1,
    canLoadMore: true,
    loading: true,
    movies: [],
  };

  loadMore = () => {
    this.setState({
      loading: true,
    }, () => {
      api.discover({
        page: this.state.page + 1,
      }).then(this.handleLoadedData);
    });
  }

  handleLoadedData = (data) => {
    this.setState((state) => ({
      loading: false,
      page: data.page,
      canLoadMore: data.page < data.total_pages,
      movies: [
        ...state.movies,
        ...data.results.map(result => ({
          id: result.id,
          title: result.title,
          description: result.overview,
          rating: result.vote_average,
          image: getImageURL(result.poster_path),
        })),
      ],
    }));
  };

  componentDidMount() {
    api.discover().then(this.handleLoadedData);
  }

  render() {
    const {
      movies,
      loading,
      canLoadMore,
    } = this.state;

    return (
      <div>
        <FancyCardsList items={movies} />

        {
          (movies.length && canLoadMore) ? (
            <Button
              disabled={loading}
              onClick={this.loadMore}
              className={css`
                display: flex;
                padding: 0 60px;
                margin: 50px auto;
                height: 50px;
                font-size: 15px;
              `}
            >
              {
                loading ? 'Loading...' : 'Load more'
              }
            </Button>
          ) : null
        }
      </div>
    );
  }
}

export default DiscoverPage;
