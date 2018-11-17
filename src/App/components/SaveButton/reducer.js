import { SAVE_MOVIE, REMOVE_MOVIE } from './actionTypes';

function moviesReducer(state, action) {
  if (action.type === SAVE_MOVIE) {
    return {
      ...state,
      savedMovies: [
        ...state.savedMovies,
        action.movie,
      ]
    }
  }

  if (action.type === REMOVE_MOVIE) {
    return {
      ...state,
      savedMovies: state.savedMovies.filter(movie => movie.id !== action.movie.id)
    }
  }

  return state;
}

export default moviesReducer;
