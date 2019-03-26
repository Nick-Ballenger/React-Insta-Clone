import React from 'react';
import PropTypes from 'prop-types'



const CommentSection = props => {
    return (
        <>
            <p className='commentText'>
                <span className='commentUsername'>{props.comment.username}</span>
                {props.comment.text}
            </p>
            <p
                
                className='time'
               
            >
                
            </p>
        </>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;