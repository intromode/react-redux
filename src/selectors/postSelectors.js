//get all posts
//get a post by its index

//when you combine reducers, youll have to change return statement to state.blog
export const getPosts = state => state.posts;

export const getPost = (state, index) => state[index];

