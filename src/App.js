import React, { Component } from 'react';
import dateformat from 'dateformat';
import './App.css';

import data from './data.json';

import Title from './Components/Title';
import Welcome from './Components/Welcome';
import Calendar from './Components/Calendar';
import Explainer from './Components/Explainer';
import Affirmation from './Components/Affirmation';

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
        <Affirmation />
        <div>{this.state.active}</div>
        <div>{notes}</div>
        <Explainer />
      </div>
    );
  }
}

export default App;
