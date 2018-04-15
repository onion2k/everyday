import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render(){
    return (
        <div className={'footer'}>
          <div>Like everyday? Send feedback!</div>
          <div><a href="https://github.com/onion2k/everyday/">Source Code</a></div>
          <div><a href="https://ooer.com/">Ooer.com</a></div>
        </div>
    );
  }
}
