import React from 'react';

const CommentInput = props => {
  return (
    <div className="comment-wrapper">
    <form onSubmit={props.submitComment}>
      <input
      className="comment-input"
        type="text"
        value={props.comment}
        placeholder="Add a comment "
        onChange={props.changeComment} />
    </form>
    </div>
  );
};

export default CommentInput;