import React, { Component } from 'react';
import './Welcome.css';

export default class Welcome extends Component {
  render(){
    return (
        <div className={'welcome'}>
          <p>Hi. I'm <span className={'name'}>{ this.props.name }</span>, { this.props.title }, and this is my everyday chart.</p>
        </div>
    );
  }
}
