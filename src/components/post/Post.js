import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};
