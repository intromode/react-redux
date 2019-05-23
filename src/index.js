import { createStore } from 'redux';
import { addPost } from './actions/postActions';

const initialState = {
  title: null,
  body: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_POST':
      return { ...state, title: action.title, body: action.body };
    case 'DELETE_POST':
      return { title: null, body: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addPost('sway-yay', 'swaying, fleeing, flinging, circus performance beaming. wash over me with light! freeing.'));
console.log('made a post', store.getState());

// store.dispatch(deletePost());
