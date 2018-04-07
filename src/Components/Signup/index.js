import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Signup.css';

export default class Signup extends Component {
  render(){
    return (
        <div className={"signup"}>
          <Link to='/signup' className={"signupButton"}>Create your first Everyday chart now</Link>
          <Link to='/user'>Already got a chart? Sign in.</Link>
        </div>
    );
  }
}
