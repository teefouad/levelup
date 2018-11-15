import React from 'react';
import { css } from 'emotion';

import { colors } from '../../../variables';

const Spinner = (props) => (
  <span className={css`
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 24px;
    height: 24px;
    margin: -12px 0 0 -12px;
    z-index: 2;
    border: 2px solid rgba(220, 220, 220, 0.5);
    border-top-color: ${colors.primary};
    border-radius: 99px;
    animation: spin 650ms infinite linear;

    @keyframes spin {
      to {
        transform: rotate(359deg);
      }
    }

    ${props.className};
  `} />
);

export default Spinner;
