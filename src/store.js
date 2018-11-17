import { createStore } from 'redux';
import moviesReducer from './App/components/SaveButton/reducer';

const devtools = window.devToolsExtension ? window.devToolsExtension() : () => null;

const initialState = {
  savedMovies: []
};

const store = createStore(
  function (state = initialState, action) {
    let newState = state;

    newState = moviesReducer(state, action);

    return newState;
  },
  devtools
);

export default store;
