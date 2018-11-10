import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div className="ex-9">
        <header>
          <h1>
            <a href="/">
              Twitter
            </a>
          </h1>

          <div>
            <strong>Select a language:</strong>
            <select>
              <option>Arabic</option>
              <option>English</option>
            </select>
          </div>
        </header>

        <section>
          <article>
            <h1>The world is beautiful</h1>

            <p>Good things come to those who wait.</p>
          </article>

          <aside>
            <h2>Advertisements</h2>

            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </aside>
        </section>
      </div>
    );
  }
}

export default App;
