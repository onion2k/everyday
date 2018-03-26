import React, { Component } from 'react';
import './App.css';

import data from './data.json';

import Calendar from './Calendar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: data.days
    }
  }
  render() {
    return (
      <div className="App">
        <h1>_____________ every day</h1>
        <Calendar days={this.state.days} />
      </div>
    );
  }
}

export default App;
