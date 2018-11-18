import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Link } from '@reach/router';

import App from './App';

const Home = () => (
  <>
    <h1>Homepage</h1>
  </>
);
const About = (props) => (
  <>
    <h1>About {props.name}</h1>
  </>
);
const Contact = () => <h1>Contact</h1>;

const app = (
  <div>
      <h1>My App title</h1>

    <Link to="/">Home page</Link>
    <Link to="/about/mostafa">About Mostafa</Link>
    <Link to="/about/ayman">About Ayman</Link>
    <Link to="/contact">Contact page</Link>

    <Router>
      <Home path="/" />
      <About path="/about/:name" />
      <Contact path="/contact" />
    </Router>
  </div>
);

ReactDOM.render(app, document.getElementById('root'));
