import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import FancyCard from '../FancyCard';

class FancyCardsList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.number,
      onClick: PropTypes.func,
    })),
  };

  static defaultProps = {
    items: [],
  };

  render() {
    const {
      items,
    } = this.props;

    return (
      <div
        className={css`
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 80px;
          max-width: 1000px;
          margin: 0 auto;
        `}
      >
        {
          items.map(item => (
            <FancyCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              rating={item.rating}
              className={css`
                max-width: 280px;
              `}
            />
          ))
        }
      </div>
    );
  }
}

export default FancyCardsList;
