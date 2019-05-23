import { createStore } from 'redux';
import { addPost, deletePost } from './actions/postActions';
import { reducer } from './reducers/postReducer';
import { getPosts, getPost } from './selectors/postSelectors';


//we can use connect to connect the store to components
//but i thought that would be what provider was doing?

const store = createStore(reducer);
export default store;

function handleChange() {
  console.log(store.getState());
}
store.subscribe(handleChange);

store.dispatch(addPost('sway-yay', 'swaying, fleeing, flinging, circus performance beaming. wash over me with light! freeing.'));

store.dispatch(addPost('phone', 'fjdkfjsdklfjjdkl'));

store.dispatch(addPost('betwice', 'ha, hilarioussss'));

console.log('testing', getPost(store.getState()));
console.log('testing 123', getPost(store.getState(), 1));


store.dispatch(deletePost(1));
