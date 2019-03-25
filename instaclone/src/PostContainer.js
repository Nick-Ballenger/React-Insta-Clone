import React from 'react'
import CommentSection from './CommentSection'

const PostContainer = props => {
  return( 
  <div>    
      {props.postProps.map(user => 
          <div key ={user.timestamp}> 
              <img src={user.imageUrl} alt={user.timestamp}/>
              <CommentSection 
                  comments={user.comments} />
          </div>
      )} 
  </div>)
}
  export default PostContainer