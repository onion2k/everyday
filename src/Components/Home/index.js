import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dateformat from 'dateformat';

import './Home.css';

import data from '../../data.json';

import Welcome from '../../Components/Welcome';
import Calendar from '../../Components/Calendar';
import Explainer from '../../Components/Explainer';
import Affirmation from '../../Components/Affirmation';
import Signup from '../../Components/Signup';
import Day from '../../Components/Day';

class Home extends Component {
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
      <div className="Home">
        <Welcome name={'Chris'} title={'creator of Everyday'} />
        <div style={{ padding: '10px 10vw' }}><Calendar days={this.state.days} updateActiveDate={this.updateActiveDate} /></div>
        <Affirmation />
        <Day date={this.state.active} notes={notes} />
        <Explainer />

        <div className={"signup"}>
          <Link to='/signup' className={"signupButton"}>Create your first Everyday chart now</Link>
          <Link to='/login'>Already got a chart? Sign in.</Link>
        </div>

        <Link to='/u/onion'>User</Link>

      </div>
    );
  }
}

export default Home;
