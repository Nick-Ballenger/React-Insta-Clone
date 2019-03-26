import React from 'react'
import CommentSection from './CommentSection'
import PropTypes from 'prop-types';
import './App.css';


class PostContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          comment: '',
          liked: false
      }
  }

  changer = event => {
      this.setState({ [event.target.name]: event.target.value });
  }

  submitComment = e => {
      e.preventDefault();

      const newComment = {
          username: 'michaelmarzetta',
          text: this.state.comment,
          timestamp: Date.now()
      }

      this.props.submitComment(this.props.post.timestamp, newComment);

      this.setState({
          comment: ''
      })
  }

  render() {
      return (
          <div className='post-wrapper'>
              <section className='post-header'>
                  <img src={this.props.post.thumbnailUrl} alt={this.props.post.timestamp}/>
                  <h3>{this.props.post.username}</h3>
              </section>
              <img className='image' src={this.props.post.imageUrl} alt={this.props.post.timestamp}/>
              <section className='comment-like'>
                  <i
                      onClick={() => this.setState({ liked: !this.state.liked })}
                      className={this.state.liked === false ? 'far fa-heart like' : 'fas fa-heart like'} />

                  <i className='far fa-comment comment' />

                  <span className='likes'>{this.state.liked === false ? this.props.post.likes : this.props.post.likes + 1} likes</span>
              </section>

              <div className='comments'>{this.props.post.comments.map((comment, id) => (
                  <CommentSection
                      comment={comment}
                      key={id}
                  />
              ))}
                  <div className='addComment'>
                      <form onSubmit={this.submitComment}>
                          <input
                              placeholder='Add comment'
                              name='comment'
                              value={this.state.comment}
                              onChange={this.changer}
                          />
                      </form>
                      <i className='fas fa-ellipsis-h' />
                  </div>
              </div>

          </div>
      )
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string
  }),
  liked: PropTypes.bool,
  liker: PropTypes.func
}

export default PostContainer;

  