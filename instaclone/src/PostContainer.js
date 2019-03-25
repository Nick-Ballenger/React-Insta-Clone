import React from 'react'
import CommentSection from './CommentSection'
import './App.css';

const PostContainer = props => {
  return( 
  <div className="post-wrapper">    
      {props.postProps.map(user => 
          <div key ={user.timestamp}> 
          <div className="postContainer">
          <div className = "post-header">
          <img  src={user.thumbnailUrl} alt={user.timestamp}/> <h3>{user.username}</h3>
          </div>
          <img className ="post-content" src={user.imageUrl} alt={user.timestamp}/>
          <div className="post-icons">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          </div>
              <h4>{user.likes} likes</h4>
             
              
              
              <CommentSection className="poop"
                  comments={user.comments} />
          </div>
          </div>
          
      )} 
  </div>)
}
PostContainer.propTypes= {
  
  
}
  export default PostContainer
  