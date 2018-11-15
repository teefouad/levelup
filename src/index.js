import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';

import './styles.css';


/* 

const CartContext = React.createContext();
const LanguageContext = React.createContext();

const cartData = {
  items: [1, 3, 4],
};

const languageData = {
  selected: "ar",
};

const withContext = (Comp, Context) => {
  return function (props) {
    return (
      <Context.Consumer>
        {
          React.Children
          (languageData) => (
            <Comp languageData={languageData} {...props} />
          )
        }
      </Context.Consumer>
    );
  };
};

const withLanguageContext = (Comp) => {
  return function (props) {
    return (
      <LanguageContext.Consumer>
        {
          (languageData) => (
            <Comp languageData={languageData} {...props} />
          )
        }
      </LanguageContext.Consumer>
    );
  };
};

const withCartContext = (Comp) => {
  return function (props) {
    return (
      <CartContext.Consumer>
        {
          (cartData) => (
            <Comp cartData={cartData} {...props} />
          )
        }
      </CartContext.Consumer>
    );
  };
};


class MyMessage extends React.Component {
  componentDidMount() {
    console.log('Select language is' + this.props.languageData.selected);
  }

  render() {
    return (
      <>
        <h1>Items Count: {this.props.cartData.items.length}</h1>
        <h1>{this.props.languageData.selected}</h1>
      </>
    );
  }
}

let MyMessageWithData = withCartContext(withLanguageContext(MyMessage));

class App extends React.Component {
  render() {
    return (
      <>
        <CartContext.Provider value={cartData}>
          <LanguageContext.Provider value={languageData}>
            <MyMessageWithData />
          </LanguageContext.Provider>
        </CartContext.Provider>
      </>
    );
  }
}

*/

ReactDOM.render(<App />, document.getElementById('root'));
