import React, { Component } from 'react';
import PostContainer from './PostContainer'
import './App.css';
import dummyData from'./dummy-data.js'
import SearchBar from './SearchBar'


class App extends Component {
  constructor(){
    super();
    this.state={
      posts : dummyData,
    }
  }
  render() {
    return (
      <div className="App">
         <SearchBar />
        <PostContainer postProps = {this.state.posts} />
      </div>
    );
  }
}

export default App;
