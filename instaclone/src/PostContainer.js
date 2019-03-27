import React from 'react'

import Post from './Post'
import './App.css';


const PostContainer = props => {
  return (
    <div className="posts-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostContainer;

  