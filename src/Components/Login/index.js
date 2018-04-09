import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email+' '+this.state.password);
  }

  render(){

    let email = {
      type: "email",
      name: "email",
      autoComplete: "email",
      value: this.state.email,
      placeholder: "chris@everyday.com",
      onChange: this.handleChange
    }
    
    let password = {
      type: "password",
      name: "password",
      autoComplete: "current-password",
      value: this.state.password,
      onChange: this.handleChange
    }

    return (
        <div className={"login"}>
          <div className={"banner"}>
            Sign in to your Everyday account
          </div>

          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Email address</label>
              <input {...email} />
            </div>
            <div>
              <label>Password</label>
              <input {...password} />
            </div>
            <div>
              <input type="submit" value="Create" />
            </div>
          </form>

        </div>
    );
  }
}
