import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';

const Login = () => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button to load data!'
  //   }
  // }

  

  
    return (
      <div className="Login">
        <h1>Login</h1>
        <form action="/login" method="POST">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  
}

export default Login;
