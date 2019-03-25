import React from 'react'
import PropTypes from 'prop-types';


const Comment  = props => {
    return(
        <div>
            <p>{props.username} </p>
            <p>{props.text}</p>
            <p>{props.likes}</p>
        </div>
    )
}

Comment.propTypes= {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comment;