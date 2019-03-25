import React, { Component } from 'react';
import PostContainer from './PostContainer'
import './App.css';
import dummyData from'./dummy-data.js'


class App extends Component {
  state = {
   posts:dummyData 
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
         <PostContainer posts={this.state.posts} />
         
        </header>
      </div>
    );
  }
}

export default App;
