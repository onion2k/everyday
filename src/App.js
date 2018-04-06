import React, { Component } from 'react';

import {
  Switch, Route, Link
} from 'react-router-dom'

import dateformat from 'dateformat';
import './App.css';

import data from './data.json';

import Title from './Components/Title';
import Welcome from './Components/Welcome';
import Calendar from './Components/Calendar';
import Explainer from './Components/Explainer';
import Affirmation from './Components/Affirmation';
import Day from './Components/Day';
import Signup from './Components/Signup';

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
    let date = new Date(2018, 0, parseInt(d, 10)+1);
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
        <Day date={this.state.active} notes={notes} />
        <Explainer />
        <Link to='/'>Home</Link>
        <Link to='/something'>Something</Link>
        <Switch>
          <Route exact path='/' component={Signup} />
        </Switch>
        <Explainer />
      </div>
    );
  }
}

export default App;
