export const addPost = (title, body) => ({
  title: title,
  body: body
});

//needs to know which post to delete
export const deletePost = () => ({
  title: null,
  body: null
});
