import React from 'react';
import Comment from './comment.js'

const CommentSection = props => {
  console.log(props.comments);
  return <div>{props.comments.map((comment, i) =>
       <Comment username={comment.username} key={i} text={comment.text} />
  )}</div>;


  
}

export default CommentSection;

