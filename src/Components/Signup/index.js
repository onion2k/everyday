import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Signup.css';

export default class Signup extends Component {
  render(){
    return (
        <div className={"signup"}>
          <Link to='/' className={"signupButton"}>Join Everyday Now</Link>
          <Link to='/something'>Already got a chart? Sign in.</Link>
        </div>
    );
  }
}
