import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notifications extends Component {
  static propTypes = {
    count: PropTypes.number,
  };

  static defaultProps = {
    count: 0,
  };

  render() {
    const {
      count,
    } = this.props;

    const countString = count > 9 ? '9+' : count;

    return (
      <div className="ex-1">
        <i className="fa fa-bell" />

        {
          count > 0 && (
            <span>
              {countString}
            </span>
          )
        }
      </div>
    );
  }
}

export default Notifications;
