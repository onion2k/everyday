import React, { Component } from 'react';
import dateformat from 'dateformat';
import './App.css';

import data from './data.json';

import Title from './Title';
import Calendar from './Calendar';

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
        <div style={{ padding: '15px 10vw' }}>
          <p>Hi. I'm Chris, and this is my everyday chart.</p>
        </div>
        <Calendar days={this.state.days} updateActiveDate={this.updateActiveDate} />
        <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '1fr 1f 1fr', gridGap: '30px', padding: '15px 10vw' }}>
          <p style={{ textAlign: 'justify', fontWeight: 300 }}>"Everyday" is an app that helps me build a positive habit. In my case that's writing code. In your case it could be anything. If there's something that you think will make you happier, or if there's a skill you want to practise, or just something you've always thought you'd like to do but you don't, then everyday might help.</p>
          <p style={{ textAlign: 'justify' }}>The way it helps me is by giving me a goal to work towards, a chart that I want to keep pristine, and positive messages when I do well. It definitely works; I've written code every day for over a year using a chart just like this one. That's why I made the "everyday" app - so everyone can benefit from a chart like mine too.</p>
          <p style={{ textAlign: 'justify' }}>You don't even need to sign up. Create a chart, tell it what you're going to track, and then off you go. You can keep your chart up-to-date using the website, or the mobile app, or the Alexa skill, or the messenger chat, or... well, there's a lot of ways. There are even ways you can add to your chart automatically without needing to do anything manually.</p>
        </div>
        <p>{this.state.active}</p>
        <p>{notes}</p>
      </div>
    );
  }
}

export default App;
