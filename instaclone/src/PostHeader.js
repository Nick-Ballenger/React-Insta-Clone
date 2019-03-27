import React from 'react';
import './App.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <h3>{props.username}</h3>
    </div>
  );
};

export default PostHeader;