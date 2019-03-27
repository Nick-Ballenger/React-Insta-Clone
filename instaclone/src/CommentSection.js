import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Comment from './comment'
import CommentInput from './CommentInput'

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        comment: ''
      };
    }
  
    componentDidMount() {
      const id = this.props.postId;
      if (localStorage.getItem(id)) {
        this.setState({
          comments: JSON.parse(localStorage.getItem(this.props.postId))
        });
      } else {
        this.setComments();
      }
    }
  
    componenetWillUnmount() {
      this.setComments();
    }
  
    setComments = () => {
      localStorage.setItem(
        this.props.postId,
        JSON.stringify(this.state.comments)
      );
    };
  
    commentChanger = e => {
      this.setState({ comment: e.target.value });
    };
  
    CommentSubmit = e => {
      e.preventDefault();
      const newComment = { username: localStorage.getItem("user"), text: this.state.comment };
      const comments = this.state.comments.slice();
      comments.push(newComment);
      this.setState({ comments, comment: '' });
      setTimeout(() => {
        this.setComments();
      }, 500);
    };
  
    render() {
      return (
        <div>
          {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
          <CommentInput
            comment={this.state.comment}
            submitComment={this.CommentSubmit}
            changeComment={this.commentChanger}
          />
        </div>
      );
    }
  }

  
  
  CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };
  
  export default CommentSection; 