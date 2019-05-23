import { createStore } from 'redux';
import { ADD_POST, DELETE_POST } from './actions/postActions';

const initialState = {
  title: null,
  body: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_POST':
      return { ...state, title: action.title };
    case 'DELETE_POST':
      return { title: null, body: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(ADD_POST('sway-yay', 'swaying, fleeing, flinging, circus performance beaming, wash over me with light, freeing.'));

store.dispatch(DELETE_POST());
