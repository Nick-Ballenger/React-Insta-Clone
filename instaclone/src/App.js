import React, { Component } from 'react';
import PostContainer from './PostContainer'
import './App.css';
import dummyData from'./dummy-data.js'
import SearchBar from './SearchBar'


class App extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      searchValue: '',
      data: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: dummyData
      });
    }, 900);
  }

  submitComment = (timestamp, comment) => {
    const commentMatch = this.state.data.slice().filter(post => post.timestamp === timestamp).pop(),
      commentUnMatch = this.state.data.slice().filter(post => post.timestamp !== timestamp);

    commentMatch.comments.push(comment);

    commentUnMatch.unshift(commentMatch);

    this.setState({ data: commentUnMatch });
  }

  search = e => {
    this.setState({ [e.target.name]: e.target.value });
    const search = this.state.data.slice().filter(post => post.username.toLowerCase().includes((e.target.value).toLowerCase()) || post.comments.map(comm => comm.text.toLowerCase().includes((e.target.value).toLowerCase()) || comm.username.toLowerCase().includes((e.target.value).toLowerCase())).includes(true));
    this.setState({ data: search });
    if (this.state.searchValue.length === 0) {
      this.setState({ data: dummyData });
    }
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div className='load'>
       loading
        </div>
      )
    } else {
      return (
        <div className="App">
          <header>
            
            <SearchBar
              search={this.search}
              searchValue={this.state.searchValue}
            />
            <div>


            
            </div>

          </header>
          {this.state.data.map(post => (
            <PostContainer
              post={post}
              
              key={post.timestamp}
              liker={this.liker}
              liked={this.state.liked}
              submitComment={this.submitComment}
            />
          ))}
        </div>
      );
    }
  }
}

export default App;