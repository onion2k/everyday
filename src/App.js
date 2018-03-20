import React, { Component } from 'react';
import palx from 'palx';
import months from './months.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      days:[],
      colors: palx('#88ff00'),
      color: "violet",
      m: Object.keys(months).map((month, i) => { return months[month].days; })
    }
    for (let x=0;x<365;x++) {
      this.state.days.push(Math.floor(Math.random()*12));
    }
  }
  render() {
    const days = this.state.days.map((day, i)=>{
      let productivity = 0;
      let classes = ['day'];
      if (day > 0) {
        productivity = 1 + Math.floor(day / 5);
      }
      return <div className={'day'} style={{ backgroundColor: this.state.colors[this.state.color][productivity*2] }}></div>
    });
    return (
      <div className="App">
        <h1>_____________ every day</h1>
        <div className="header">
          <div></div>
          <div class="month">Jan</div>
          <div class="month">Feb</div>
          <div class="month">Mar</div>
          <div class="month">Apr</div>
          <div class="month">May</div>
          <div class="month">June</div>
          <div class="month">July</div>
          <div class="month">Aug</div>
          <div class="month">Sept</div>
          <div class="month">Oct</div>
          <div class="month">Nov</div>
          <div class="month">Dec</div>
        </div>
        <main id="graph" className="graph">
          <div className="sunday"></div>
          <div className="weekday">Monday</div>
          <div className="weekday">Wednesday</div>
          <div className="weekday">Friday</div>
          {days}
        </main>
      </div>
    );
  }
}

export default App;
