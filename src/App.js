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
        <main id="graph" className="graph">

          <div className="month start"></div>
          <div className="month jan">Jan</div>
          <div className="month feb">Feb</div>
          <div className="month mar">Mar</div>
          <div className="month apr">Apr</div>
          <div className="month may">May</div>
          <div className="month june">June</div>
          <div className="month july">July</div>
          <div className="month aug">Aug</div>
          <div className="month sept">Sept</div>
          <div className="month oct">Oct</div>
          <div className="month nov">Nov</div>
          <div className="month dec">Dec</div>

          <div className="sunday"></div>
          <div className="weekday">Monday</div>
          <div className="weekday">Wednesday</div>
          <div className="weekday">Friday</div>

          <div className="empty"></div>

          {days}
        </main>
      </div>
    );
  }
}

export default App;
