import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../store';

class App extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
    people: [],
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        people: store.getState().people,
      });
    })
  }

  addNewPerson = () => {
    const personName = prompt('Enter person name');
    store.dispatch({
      type: 'ADD_PERSON',
      personName,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.addNewPerson}>Add new person</button>

        <ul>
          {
            this.state.people.map(person => (
              <li key={person}>
                {person}
                <button
                  onClick={
                    () => store.dispatch({
                      type: 'REMOVE_PERSON',
                      person,
                    })
                  }
                >Remove {person}</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
