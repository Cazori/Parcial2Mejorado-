import React from 'react';


const PostsListItem = ({ post }) => {
  return (
    <li className="list-group-item">
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <p>ID: {post.id}</p>
      
    </li>
  );
};

export default PostsListItem;
