import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';

class Register extends Component {
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
      <div className="Register">
        <h1>Register</h1>
        <form action="/register" method="POST">
          <div>
            <label for="email">Email address</label>
            <input type="email" class="form-control" name="email" placeholder="Enter email" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;