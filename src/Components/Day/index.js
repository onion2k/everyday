import React, { Component } from 'react';
import './Day.css';

class Activity extends Component {
  render(){
    return (<div>
        <p><span className={"activity"}>Code</span> activity updated from Alexa:</p>
        {this.props.children}
      </div>);
  }
}

export default class Day extends Component {
  render(){
    let notes = null;
    if (this.props.notes !== null) {
      if (this.props.notes.length > 0) {
        notes = this.props.notes.map((note) => {
          return <Activity>{note}</Activity>;
        });
      }
    }
    return (
        <div className="dayactivity">
          <p>{this.props.date}</p>
          {notes}
        </div>
    );
  }
}
