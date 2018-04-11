import React, { Component } from 'react';

import Calendar from '../../Components/Calendar';

const u = {
  displayName: "",
  email: "",
  emailVerified: false
}

export default class Chart extends Component {
  render(){
    return (
      <div className={"chart"}>
        <h1>{this.props.title}</h1>
        <Calendar days={[]} />
      </div>
    );
  }
}
