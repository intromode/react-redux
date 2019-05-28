//index calls app, app calls allPosts which connects to allposts to redux, allPosts uses Posts, Posts uses Post.


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from '../src/components/App';

//provider allows us to pass store onto every component without having to explicitly pass it to each one as a prop
//so, totally dont need it but its convenient
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
