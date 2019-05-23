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
});
