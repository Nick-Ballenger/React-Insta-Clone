import React from 'react';

const LikeSection = props => {
  return [
    <div className="like-wrapper">
     <div
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <div className="post-icons">
        <i className="far fa-heart" />
      
      
        <i className="far fa-comment" />
      </div>
    </div>
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
    </div>
   
  ];
};

export default LikeSection;