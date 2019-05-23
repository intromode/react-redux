import { createStore } from 'redux';
import { addPost, deletePost } from './actions/postActions';

const initialState = [];

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_POST':
      return [...state, { title: action.title, body: action.body }];
    case 'DELETE_POST':
      return { title: null, body: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addPost('sway-yay', 'swaying, fleeing, flinging, circus performance beaming. wash over me with light! freeing.'));
console.log('made a post', store.getState());

store.dispatch(addPost('phone', 'fjdkfjsdklfjjdkl'));
console.log('made phone post', store.getState());

store.dispatch(deletePost());
console.log('deleted post', store.getState());

