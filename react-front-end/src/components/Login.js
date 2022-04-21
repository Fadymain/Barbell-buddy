import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';

class Login extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button to load data!'
  //   }
  // }

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form action="/login" method="POST">
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" name="email" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
