import React, { Component } from 'react';
import palx from 'palx';
import months from './months.json';
import './Calendar.css';

import Day from './Day';

export default class Calendar extends Component {

  constructor(props){
    super(props);
    this.m = Object.keys(months).map((month, i) => { return months[month].days; });
    this.year = 2018;
    this.date = new Date('2016-01-01');
    this.weekday = this.date.getDay();
    this.state = {
      days: props.days,
      colors: palx('#f00'),
      color: "violet"
    }
  }
  days(n, color){
    let days = [];
    for(let x=0; x < n; x++) {
      let productivity = 0;
      let day = this.state.days[x];
      if (day.productivity > 0) {
        productivity = 1 + Math.floor(day.productivity / 5);
      }
      days.push(<div className={'day'} style={{ backgroundColor: this.state.colors[color][productivity*2] }}></div>);
      // days.push(<Day color={color} productivity={productivity*2}></Day>);
    }
    return days;
  }
  offset(n){
    return Array(n).fill(<div className="empty"></div>);
  }
  render(){
    return (
        <main id="calendar" className="calendar">

          <div className="sunday"></div>
          <div className="weekday">Mon</div>
          <div className="weekday">Wed</div>
          <div className="weekday">Fri</div>
          
          <div className="month start"></div>
          <div className="month jan">Jan</div>
          {this.offset(this.weekday)}
          {this.days(this.m[0],"red")}

          <div className="month feb">Feb</div>
          {this.days(this.m[1],"orange")}

          <div className="month mar">Mar</div>
          {this.days(this.m[2],"yellow")}

          <div className="month apr">Apr</div>
          {this.days(this.m[3],"lime")}

          <div className="month may">May</div>
          {this.days(this.m[4],"green")}

          <div className="month june">June</div>
          {this.days(this.m[5],"teal")}

          <div className="month july">July</div>
          {this.days(this.m[6],"cyan")}

          <div className="month aug">Aug</div>
          {this.days(this.m[7],"blue")}

          <div className="month sept">Sept</div>
          {this.days(this.m[8],"indigo")}

          <div className="month oct">Oct</div>
          {this.days(this.m[9],"violet")}

          <div className="month nov">Nov</div>
          {this.days(this.m[10],"pink")}

          <div className="month dec">Dec</div>
          {this.days(this.m[11],"gray")}

        </main>
    );
  }
}
