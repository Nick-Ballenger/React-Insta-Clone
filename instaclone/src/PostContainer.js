import React from 'react'
// import PropTypes from 'prop-types'
function PostContainer(props) {
    console.log(props);
    return (
      <>
        {props.posts.map(user => (
          <div key={user.id} className="user">
           
            <div>
            <p>User: {user.username}</p>
            <img src={user.thumbnailUrl} alt={user.name} />
            <img src={user.imageUrl} alt={user.name} />
            <p>Likes: {user.likes}</p>
            <p>{user.timestamp}</p>

            </div>
          </div>
        ))}
      </>
    );
  }
  export default PostContainer