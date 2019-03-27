import React from 'react'



class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        username: '',
        
        password: ''

      };
    }
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleLoginSubmit = e => {
      e.preventDefault()
      if(this.state.username && this.state.password !== ""){
      const user = this.state.username;
      localStorage.setItem('user', user);
      window.location.reload();}
    };
  
    render() {
      return (

        <form onSubmit = {this.handleLoginSubmit}>
          <input 
          type="text"
          placeholder="Username"
          name="username"
          className="login-text"
          value={this.state.username}
          onChange={this.handleInputChange}></input>
          <input
            type="password"
              placeholder="Password"
              name="password"
              className="login-text"
              value={this.state.password}
              onChange={this.handleInputChange}></input>
              <button onClick={this.handleLoginSubmit}>Login</button>
        </form>
        
        
      );
    }
  }
  

export default Login; 