//normally here we would call in our file that pings the API and pass Posts the array that we get back
//we make a connect file for every component we want to connect 
//instead, this is where we will bring in our store and get the array from that!!
//we use connect to connect our components(the Posts component?) with our store
//still not 100% on why its not already connected if were passing the store down as a prop in the Provider wrapper 
//connect is a higher order function 
import { connect } from 'react-redux';
import Posts from '../components/post/Posts';
import { getPosts } from '../selectors/postSelectors';

//connect takes 2 arguments! it then returns a function that we can pass our component(posts) to
//here we only need to pass state as props, dont need to dispatch. because we want to dispatch when the button is clicked so its related to a diff component 
const mapStateToProps = state => ({
  //takes the current state of our store and allows us to map it into props.
  //the keys are the names of the props that were passing into the (Posts) components. so here its posts
  //then you get your posts from the state using your selector
  postsArray: getPosts(state)
});


//so this is saying connect Posts component to the state which is received from MapStateToProps
export default connect(mapStateToProps)(Posts);
//why dont we have to do null here for dispathToProps?


