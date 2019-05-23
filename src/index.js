import { createStore } from 'redux';
import { addPost, deletePost } from './actions/postActions';
import { reducer } from './reducers/postReducer';


const store = createStore(reducer);

function handleChange() {
  console.log(store.getState());
}
store.subscribe(handleChange);

store.dispatch(addPost('sway-yay', 'swaying, fleeing, flinging, circus performance beaming. wash over me with light! freeing.'));

store.dispatch(addPost('phone', 'fjdkfjsdklfjjdkl'));

store.dispatch(addPost('betwice', 'ha, hilarioussss'));

store.dispatch(deletePost(1));

