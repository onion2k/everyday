import React, { Component } from 'react';
import months from './months.json';
import './Calendar.css';
import styles from './Productivity.css.js';

export default class Calendar extends Component {

  constructor(props){
    super(props);
    this.mname = Object.keys(months).map((month, i) => { return months[month].short; });
    this.m = Object.keys(months).map((month, i) => { return months[month].days; });
    this.year = 2018;
    this.date = new Date('2018-01-01');
    this.weekday = this.date.getDay();
    this.state = {
      days: props.days,
      active: -1
    }
    this.active = this.active.bind(this);
    this.days = this.days.bind(this);
  }
  active(e){
    let active = document.querySelector('.active')
    if (active) { active.classList.toggle('active'); }
    e.target.classList.toggle('active');
    // let date = new Date(2018, 0, e.target.getAttribute('rel'));
    // this.setState({active: date.toString()});
    this.props.updateActiveDate(e.target.getAttribute('rel'));
  }
  days(n, color){
    let days = [];
    // let offset = this.m.reduce((t, x, i)=>{ return t += (i < n) ? x : 0 }, 0);
    let offset = this.m.slice(0,n).reduce((t, x)=>{ return t += x }, 0);
    for(let x=offset; x < offset+this.m[n]; x++) {
      let productivity = 0;
      let day = this.state.days[x];
      let updates = 0;
      if (day && day.productivity > 0) {
        productivity = day.productivity - 1;
        updates = day.notes.length;
      }
      let prod = this.mname[n].toLowerCase()+'-'+productivity.toString();
      days.push(<div key={'m'+n+'d'+x} className={'day'} style={styles[prod]} onClick={this.active} tooltip={`${updates} update${updates===1?'':'s'}`} tooltip-position="top" rel={x}></div>);

    }
    return days;
  }
  offset(n){
    return Array(n).fill().map((n,i)=>{ return <div key={i.toString()} className="empty"></div> });
  }
  render(){
    let daystyles = null;
    this.mname.forEach((m,i)=>{

    })
    return (
        <main id="calendar" className="calendar">

          <style>{daystyles}</style>

          <div className="sunday"></div>
          <div className="weekday">Monday</div>
          <div className="weekday">Wednesday</div>
          <div className="weekday">Friday</div>
          
          <div className="month start"></div>
          <div className="month jan">Jan</div>
          {this.offset(this.weekday)}
          {this.days(0,"red")}

          <div className="month feb">Feb</div>
          {this.days(1,"orange")}

          <div className="month mar">Mar</div>
          {this.days(2,"yellow")}

          <div className="month apr">Apr</div>
          {this.days(3,"lime")}

          <div className="month may">May</div>
          {this.days(4,"green")}

          <div className="month june">June</div>
          {this.days(5,"teal")}

          <div className="month july">July</div>
          {this.days(6,"cyan")}

          <div className="month aug">Aug</div>
          {this.days(7,"blue")}

          <div className="month sept">Sept</div>
          {this.days(8,"indigo")}

          <div className="month oct">Oct</div>
          {this.days(9,"violet")}

          <div className="month nov">Nov</div>
          {this.days(10,"pink")}

          <div className="month dec">Dec</div>
          {this.days(11,"gray")}

        </main>
    );
  }
}
