import React, { Component } from 'react';
import { Link } from '@reach/router';
import { css } from 'emotion';

import Counter from '../Counter';
import { colors } from '../../variables';

class Header extends Component {
  render() {
    return (
      <header
        className={css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 calc((100% - 1000px)/2);
          width: 100%;
          height: 80px;
          background: #fff;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        `}
      >
        <h1>
          <Link
            to="/"
            className={css`
              display: block;
              font-size: 24px;
              line-height: 1;
              text-decoration: none;
              color: inherit;

              span {
                padding: 0 4px;
                margin: 0 0 0 3px;
                line-height: 1;
                color: #fff;
                background: ${colors.primary};
                border-radius: 5px;
              }
            `}
          >
            Level<span>up</span>
          </Link>
        </h1>
        <Counter value={5} />
      </header>
    );
  }
}

export default Header;
