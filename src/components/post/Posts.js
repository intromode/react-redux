import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function Posts({ postsArray }) {
  const postsList = postsArray.map(post => {
    return (
      <li key={post.title}>
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

Posts.propTypes = {
  postsArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }))
};
