import React, { Component } from 'react';
import './App.css';

import Calendar from './Calendar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      days:[],
    }
    for (let x=0;x<366;x++) {
      this.state.days.push(Math.floor(Math.random()*12));
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
