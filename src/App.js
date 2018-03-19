import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      days:[]
    }
    for (let x=0;x<366;x++) {
      this.state.days.push(Math.floor(Math.random()*12));
    }
  }
  render() {
    const days = this.state.days.map((day)=>{
      let productivity = 0;
      let classes = ['day'];
      if (day > 0) {
        productivity = 1 + Math.floor(day / 4);
        switch (productivity) {
          case 0: classes.push(`prod_low`); break;
          case 1: classes.push(`prod_mid`); break;
          case 2: classes.push(`prod_high`); break;
          case 3: classes.push(`prod_max`); break;
        }
      }
      return <div className={classes.join(' ')}></div>
    });
    return (
      <div className="App">
        <main id="graph" className="graph">
          {days}
        </main>
      </div>
    );
  }
}

export default App;
