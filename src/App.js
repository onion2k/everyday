import React, { Component } from 'react';
import dateformat from 'dateformat';
import './App.css';

import data from './data.json';

import Title from './Components/Title';
import Welcome from './Components/Welcome';
import Calendar from './Components/Calendar';
import Explainer from './Components/Explainer';

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
      active: dateformat(date, "fullDate")
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
        <Welcome name={'Chris'} title={'creator of Everyday'} />
        <Calendar days={this.state.days} updateActiveDate={this.updateActiveDate} />
        <p className={'affirmation'}>Well done <span className={'name'}>Chris</span>! You've managed to <span className={'activity'}>code</span> every day for a total of <span className={'duration'}>340 days</span>. There are <span className={'total'}>123</span> other people doing <span className={'activity'}>code</span> with you every day.</p>
        <p>{this.state.active}</p>
        <p>{notes}</p>
        <Explainer />
      </div>
    );
  }
}

export default App;
