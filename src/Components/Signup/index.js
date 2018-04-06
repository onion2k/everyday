import React, { Component } from 'react';
import './Signup.css';

export default class Signup extends Component {
  render(){
    return (
        <div className={"signup"}>
            <button className={"signupButton"}>Join Everyday Now</button>
            <a href="">Already got a chart? Sign in.</a>
        </div>
    );
  }
}
