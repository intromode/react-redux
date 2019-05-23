import { getPosts, getPost } from './postSelectors';

describe('tests post selectors', () => {
  it('tests getPosts selector', () => {
    const fakeStore = [{
      title:'HEY', body:'NO YOU HEY' }, { title:'BYE', body:'NO YOU BYE' }, { title:'OKAY', body:'NO YOU OKAY'
    }];
    expect(getPosts(fakeStore)).toEqual([{
      title:'HEY', body:'NO YOU HEY' }, { title:'BYE', body:'NO YOU BYE' }, { title:'OKAY', body:'NO YOU OKAY'
    }]);
  });
});
