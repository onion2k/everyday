import React, { Component } from 'react';
// import './Explainer.css';

export default class Affirmation extends Component {
  render(){
    return (
      <p className={'affirmation'}>Well done <span className={'name'}>Chris</span>! You've managed to <span className={'activity'}>code</span> every day for a total of <span className={'duration'}>340 days</span>. There are <span className={'total'}>123</span> other people doing <span className={'activity'}>code</span> with you every day.</p>
    );
  }
}
