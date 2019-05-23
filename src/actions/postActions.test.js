import { addPost, deletePost } from './postActions';


describe('testing post actions', () => {
  it('tests the addPost action', () => {
    const post = addPost('WATER BOTTLE', 'there was once a water bottle that...');
    expect(post).toEqual({
      type: 'ADD_POST',
      title: 'WATER BOTTLE',
      body:'there was once a water bottle that...',
    });
  });
  it('tests the deletePost action', () => {
    const deleteMe = deletePost(4);
    expect(deleteMe).toEqual({
      type: 'DELETE_POST',
      index: 4
    });
  });
});
