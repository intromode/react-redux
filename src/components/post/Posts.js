import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function Props({ postsArray }) {
  const postsList = postsArray.map(post => {
    return (
      <li key={post.id}>
        <Post post={post} />
      </li>
    );
  });
  return (
    <ul>
      {postsList}
    </ul>
  );
}

Props.propTypes = {
  postsArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }))
};
