import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Ch-1';
import Card from './Ch-2';
import Counter from './Ch-3';
import Tabs from './Ch-4';
import Timer from './Ch-5';
import Todos from './Ch-6';
import { ModalParent } from './Ch-7';
import App from './Ch-9';

import './styles.css';
/*
const spinnerContainer = document.createElement('div');
document.body.appendChild(spinnerContainer);

class App extends React.Component {
  state = {
    errors: {},
    submitting: false,
    submitted: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    const name = e.target.name.value;
    const email = e.target.email.value;
    const role = e.target.role.value;

    let faultyField;

    // if (name < 2) {
    //   errors.name = 'Name is too short';
    //   faultyField = faultyField || e.target.name;
    // }

    // if (email.indexOf('@', 0) === -1 || email.indexOf('.', 0) === -1) {
    //   errors.email = 'Invalid email';
    //   faultyField = faultyField || e.target.email;
    // }

    // if (!role) {
    //   errors.role = 'You must select a role';
    //   faultyField = faultyField || e.target.role;
    // }

    this.setState({ errors });

    if (Object.keys(errors).length > 0) {
      faultyField.focus();
    } else {
      this.setState({
        submitting: true,
      });

      setTimeout(() => {
        this.setState({
          submitting: false,
          submitted: true,
        });
      }, 3000);
    }
  }

  componentWillUnmount() {
    spinnerContainer.parent.removeChild(spinnerContainer);
  }

  render() {
    const {
      submitted,
      submitting,
      errors,
    } = this.state;

    return (
      submitted ? (
        <h1>Thanks</h1>
      ) : (
          <form
            onSubmit={this.handleSubmit}
            style={{
              opacity: (submitting ? 0.2 : 1)
            }}  
          >
            <div>
              Name:
              <input
                name="name"
              />
              {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
              Email:
              <input
                name="email"
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
              Role:
              <select name="role">
                <option value="">Select a role...</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="data-scientist">Data Scientist</option>
                <option value="qa-engineer">QA Engineer</option>
              </select>
              {errors.role && <p>{errors.role}</p>}
            </div>

            <div>
              Motivation:
              <textarea
                name="motivation"
              />
              {errors.motivation && <p>{errors.motivation}</p>}
            </div>

            {
              ReactDOM.createPortal(
                submitting && <div className="spinner" />, document.body
              )
            }

            <button>
              Submit
            </button>
          </form>
        )
    );
  }
}
*/

/* 

const App = () => <Todos initialItems={
 [
   {
     text: 'Buy milk',
     complete: false,
   },
   {
     text: 'Drink milk',
     complete: false,
   },
   {
     text: 'Buy more milk',
     complete: false,
   },
 ]
} />;
 */

// const redBoxesHolder = document.createElement('ul');
// redBoxesHolder.id = 'red-boxes';
// document.body.appendChild(redBoxesHolder);


// const App = (props) => (
//   <>
//     <h1>App title</h1>
//     <Demo>
//       <h1>Title</h1>
//       <p>Lorem ipsum <a href="http://google.com">dolor</a></p>
//     </Demo>
//   </>
// );


ReactDOM.render(<App />, document.getElementById('root'));
