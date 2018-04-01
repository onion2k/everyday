import React, { Component } from 'react';
import './App.css';

import data from './data.json';

import Title from './Title';
import Calendar from './Calendar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: data.days,
      active: null,
      activity: null
    }
    this.updateActiveDate = this.updateActiveDate.bind(this);
  }
  updateActiveDate(d){
    let date = new Date(2018, 0, d+1);
    this.setState({
      activity: this.state.days[d],
      active: date.toString()
    });
  }
  render() {
    let notes = null;
    if (this.state.activity) {
      if (this.state.activity.notes) {
        notes = this.state.activity.notes.map((note)=>{
          return <p>{note}</p>;
        });
      } else {
          notes = <p>No activity</p>;
      }
    }
    return (
      <div className="App">
        <Title />
        <Calendar days={this.state.days} updateActiveDate={this.updateActiveDate} />
        <p>{this.state.active}</p>
        <p>{notes}</p>
      </div>
    );
  }
}

export default App;
