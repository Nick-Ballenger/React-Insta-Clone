import React from 'react'
import PropTypes from 'prop-types';
import './App.css';




const Comment  = user => {
    return(
        <div className="comment">
            <h4 className="user-comment">{user.username} </h4>
            <p>{user.text}</p>
            
            
        </div>
         
                     
               
    )
}

Comment.propTypes= {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comment;