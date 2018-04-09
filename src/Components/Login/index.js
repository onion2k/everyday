import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

export default class Login extends Component {

  render(){

    let email = {
      type: "email",
      name: "email",
      value: "",
      placeholder: "chris@everyday.com"
    }
    
    let password = {
      type: "password",
      name: "password",
      value: ""
    }

    return (
        <div className={"login"}>
          <div className={"banner"}>
            Sign in to your Everyday account
          </div>

          <form>
            <div>
              <label>Email address</label>
              <input {...email} />
            </div>
            <div>
              <label>Password</label>
              <input {...password} />
            </div>
          </form>

        </div>
    );
  }
}
