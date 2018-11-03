import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

class Tabs extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string),
    onTabClick: PropTypes.func,
    initialIndex: PropTypes.number,
  };

  static defaultProps = {
    tabs: [],
    initialIndex: 0,
    onTabClick: () => null,
  };

  state = {
    selectedIndex: this.props.initialIndex,
  };

  handleClick = (index) => {
    this.setState({ selectedIndex: index }, () => {
      this.props.onTabClick(this.state.selectedIndex);
    });
  }

  render() {
    const {
      tabs,
    } = this.props;

    const {
      selectedIndex,
    } = this.state;
    
    return (
      <ul className="ex-4">
        {
          tabs.map((tabTitle, index) => (
            <li
              key={uuid()}
              className={(selectedIndex === index) ? 'is-active' : ''}
            >
              <button
                onClick={this.handleClick.bind(this, index)}
              >
                {tabTitle}
              </button>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Tabs;
