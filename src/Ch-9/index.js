import React, { Component } from 'react';
import PropTypes from 'prop-types';

const translations = {
  logo: {
    en: 'Twitter',
    ar: 'تويتر',
  },
  ads: {
    en: 'Advertisements',
    ar: 'إعلانات'
  },
  switcherTitle: {
    en: 'Select a language',
    ar: 'إختر اللغة'
  }
};

const languageContext = React.createContext();

class App extends Component {
  state = {
    language: 'ar',
  }

  render() {
    return (
      <languageContext.Provider value={{
        language: this.state.language,
        setLanguage: (language) => {
          this.setState({
            language
          })
        },
        translate(id) {
          return translations[id][this.language];
        }
      }}>
        <div className="ex-9"
          style={{
            direction: this.state.language === 'en' ? 'ltr' : 'rtl'
          }}
        >
          <Header />
          <Content />
        </div>
      </languageContext.Provider>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <Switcher />
      </header>
    );
  }
}

class Logo extends React.Component {
  static contextType = languageContext;

  render() {
    return (
      <h1>
        <a href="/">
          {this.context.translate('logo')}
        </a>
      </h1>
    );
  }
};

class Switcher extends React.Component {
  static propTypes = {
    language: PropTypes.string,
  };

  static defaultProps = {
    language: 'ar',
  };

  static contextType = languageContext;

  render() {
    const {
      language,
    } = this.context;

    return (
      <div>
        <strong>{this.context.translate('switcherTitle')}:</strong>

        <select value={language} onChange={(e) => this.context.setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    );
  }
}


const Content = (props) => (
  <section>
    <Article />
    <Sidebar />
  </section>
);

const Article = () => (
  <article>
    <h1>The world is beautiful</h1>

    <p>Good things come to those who wait.</p>
  </article>
);

const Sidebar = (props) => (
  <aside>
    <h2>Advertisements</h2>
    <ul>
      <li />
      <li />
      <li />
      <li />
    </ul>
  </aside>
);

export default App;
