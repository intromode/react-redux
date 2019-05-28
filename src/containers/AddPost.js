import { connect } from 'react-redux';
import PostForm from '../components/post/PostForm';
import { addPost } from '../actions/postActions';

//where does it get state?? ANSWER: connect does this 'magic' by passing in store.dispatch. how does it know??
//we only need to dispatch here, dont need to pass down state

//store.dispatching
//so we dispatch actions to props that can be passed down to components. here its the PostForm component
//what does PostForm expect as a prop? thats what the key will be


const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(addPost(title, body));
  }
});

export default connect(null, mapDispatchToProps)(PostForm);
