export const addPost = (title, body) => ({
  type: 'ADD_POST',
  title: title,
  body: body
});

//needs to know which post to delete??
export const deletePost = () => ({
  type: 'DELETE_POST',
  title: null,
  body: null
});
