import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
  
  constructor(props){
    super(props);
    this.startLoop = this.startLoop.bind(this);
    this.loop = this.loop.bind(this);
    this.state = {
      title: 0,
      counter: 0,
      offset: -30,
      titles: [
        'Design',
        'Read',
        'Yoga',
        'Code',
        'Write',
        'Paint',
        'Draw',
        'Dance',
        'Exercise',
        'Compose',
        'Sing',
        'Practise',
        'Walk',
        'Sculpt',
        'Photograph',
        'Weave',
        'Game',
        'Hustle',
        'Learn'
      ]
    }
  }

  componentDidMount() {
    this.startLoop();
  }
  
  componentWillUnmount() {
    this.stopLoop();
  }

  startLoop() {
    if( !this._frameId ) {
      this._frameId = window.requestAnimationFrame( this.loop );
    }
  }
  
  loop() {
    let c = this.state.counter;
    let o;
    let t = this.state.title;
    c += 1;
    if (c > 30 && c < 70) {
      o = 0;
    } else if (c <= 30) {
      o = c - 30;
    } else {
      o = c - 70;
    }

    if (c > 110) { c = 0; t += 1; }
    if (t > this.state.titles.length-1) { t = 0; }

    this.setState({title: t, offset: -1*o, counter: c})

    this._frameId = window.requestAnimationFrame( this.loop )

  }
  
  stopLoop() {
    window.cancelAnimationFrame( this._frameId );
  }


  render(){
    let title = this.state.titles[this.state.title];
    let style = { transform: "translateY("+this.state.offset+"px)" };
    return (
      <div className={"title"}>
        <h1>Build positive habits with everyday</h1>
        <h2><span className={"activity"} style={style}>{title}</span> every day</h2>
      </div>
    );
  }
}
