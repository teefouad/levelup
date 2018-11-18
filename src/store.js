import { createStore } from 'redux';

const initialState = {
  people: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_PERSON') {
    return {
      ...state,
      people: [
        ...state.people,
        action.personName,
      ],
    };
  }

  if (action.type === 'REMOVE_PERSON') {
    return {
      ...state,
      people: state.people.filter(p => p !== action.person),
    };
  }
  
  return state;
}

const store = createStore(reducer);

export default store;
