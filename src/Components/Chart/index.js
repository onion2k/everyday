import React, { Component } from 'react';

import Calendar from '../../Components/Calendar';
import Update from '../../Components/Update';

export default class Chart extends Component {
  render(){
    return (
      <div className={"chart"}>
        <h3>{this.props.title}</h3>
        <Calendar days={[]} />
        <Update />
      </div>
    );
  }
}
