import React from 'react'
import './App.css';




const Comment = props => {
    return (
      <div className="comment">
        <h4 className="user">{props.comment.username}</h4>{' '}
        <p className="text">{props.comment.text}</p>
      </div>
    );
  };
  
  
  
  export default Comment; 
