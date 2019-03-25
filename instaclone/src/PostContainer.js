import React from 'react'
// import PropTypes from 'prop-types'
function PostContainer(props) {
    console.log(props);
    return (
      <>
        {props.dummyData.map(user => (
          <div id={user.id} className="user">
            <img src={user.thumbnailURL} alt={user.name} />
            <div>
              <p>{user.name}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
  export default PostContainer