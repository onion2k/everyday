import React, { Component } from 'react';
import './App.css';

import data from './data.json';

import Calendar from './Calendar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: data.days,
      active: null
    }
    this.updateActiveDate = this.updateActiveDate.bind(this);
  }
  updateActiveDate(d){
    let date = new Date(2018, 0, d);
    this.setState({active: date.toString()});
  }
  render() {
    return (
      <div className="App">
        <h1>_____________ every day</h1>
        <Calendar days={this.state.days} updateActiveDate={this.updateActiveDate} />
        <p>{this.state.active}</p>
      </div>
    );
  }
}

export default App;
