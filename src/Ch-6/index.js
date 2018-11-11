import React, { Component } from 'react';
import PropTypes from 'prop-types';
import generateRandomID from 'uuid/v4';

class Todos extends Component {
  static propTypes = {
    initialItems: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      complete: PropTypes.bool,
    })),
  };

  static defaultProps = {
    initialItems: [],
  };

  state = {
    items: this.props.initialItems,
  };

  addNewItem = (e) => {
    e.preventDefault();

    const field = e.target.newItem;
    const text = field.value;

    if (!text) {
      return;
    }

    this.setState((state) => ({
      items: [
        ...state.items,
        {
          text,
          complete: false,
        },
      ]
    }), () => {
      field.value = '';
    });
  };

  toggleItem = (index) => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        {
          ...this.state.items[index],
          complete: !this.state.items[index].complete,
        },
        ...this.state.items.slice(index + 1),
      ],
    })
  }

  clearComplete = () => {
    this.setState({
      items: this.state.items.filter(item => !item.complete),
    })
  }

  deleteItem = (index) => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1),
      ],
    })
  };

  render() {
    const {
      items,
    } = this.state;

    return (
      <div className="ex-6">
        <form onSubmit={this.addNewItem}>
          <input
            type="text"
            name="newItem"
            placeholder="Type here..."
          />
        </form>

        <ol>
          {
            items.map((item, index) => (
              <li key={generateRandomID()}>
                <button
                  onClick={this.toggleItem.bind(this, index)}
                >{
                    item.complete ? (
                      <s>{item.text}</s>
                    ) : (
                        item.text
                      )
                  }</button>
                <span onClick={this.deleteItem.bind(this, index)}>
                  <i className="fa fa-trash" />
                </span>
              </li>
            ))
          }
        </ol>

        <button onClick={this.clearComplete}>
          Clear Complete
        </button>
      </div>
    );
  }
}

export default Todos;
