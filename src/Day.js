import React, { Component } from 'react';
import palx from 'palx';

export default class Day extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors: palx('#f00')
    }
  }
  render(){
    let p = this.props.productivity;
    return (
      <div className={'day'}>{p}</div>
    );
  }
}
