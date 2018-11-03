import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class ControlledInputs extends React.Component {
  state = {
    title: '',
  }

  handleSubmit = (e) => {
    console.log(this.state);
    if (this.state.title === '') {
      alert('Please type something')
      this.titleField.focus();
    }
    e.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Number of items</label>
        <input
          type="text"
          ref={(el) => { this.titleField = el; }}
          placeholder="Please enter the title"
          value={this.state.title}
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              this.setState({
                title: e.target.value,
              })
            }
            
          }}
        />
        <button>Submit</button>
      </form>
    )
  }
}

class UncontrolledInputs extends React.Component {
  state = {
    errors: {},
  }
  
  handleSubmit = (e) => {
    const title = e.target.title.value;
    const email = e.target.email.value;
    const errors = {};

    if (!title) {
      errors.title = 'Please enter the title';
      e.target.title.focus();
    }

    if (!email) {
      errors.email = 'Please enter the email';
      e.target.email.focus();
    }

    this.setState({
      errors,
    })

    e.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" name="title" />
          {
            this.state.errors.title && <p>
              {this.state.errors.title}
            </p>
          }
        </div>
        <div>
          <input type="text" name="email" />
          {
            this.state.errors.email && <p>
              {this.state.errors.email}
            </p>
          }
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

const App = () => (
  <>
    <UncontrolledInputs />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
