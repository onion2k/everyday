import React, { Component } from 'react';

export default class Title extends Component {
  
  constructor(props){
    super(props);
    this.startLoop = this.startLoop.bind(this);
    this.loop = this.loop.bind(this);
    this.state = {
      title: 0,
      offset: -30,
      titles: [
        '__________',
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
        'Walk'
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
    let o = this.state.offset;
    let t = this.state.title;
    o -= 1;
    if (o < -40) { o = 40; t += 1; }
    if (t > this.state.titles.length-1) { t = 0; }
    this.setState({title: t, offset: o})
    this._frameId = window.requestAnimationFrame( this.loop )
  }
  
  stopLoop() {
    window.cancelAnimationFrame( this._frameId );
  }


  render(){
    let title = this.state.titles[this.state.title];
    let style = { display: 'inline-block', width: '160px', 'text-align': 'right', transform: "translateY("+this.state.offset+"px)" };
    return (
      <div>
        <h1 style={{ overflow: 'hidden' }}><span style={style}>{title}</span> every day</h1>
      </div>
    );
  }
}
