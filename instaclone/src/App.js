import React from 'react'
import './App.css';
import dummyData from'./dummy-data.js'

import WithAuthenticate from './WithAuthenticate'
import Login from './Login'
import PostPage from './PostPage'



class App extends React.Component {
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


  render() {
    return (
      <div className="App">
      <h2 className="Login">Login</h2>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = WithAuthenticate(PostPage)(Login);

export default App;