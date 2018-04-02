import React, { Component } from 'react';
import './Explainer.css';

export default class Explainer extends Component {
  render(){
    return (
        <div className={'explainerThreeCol'}>
          <p className={"highlight"}>"Everyday" is an app that helps me build a positive habit. In my case that's writing more code. In your case it could be anything. If there's something that you think will make you happier, or if there's a skill you want to practise, or just something you've always thought you'd like to do but you don't, then everyday might help.</p>
          <p>The way it helps me is by giving me a goal to work towards, a chart that I want to keep pristine, and positive messages when I do well. It definitely works; I've written code every day for over a year using a chart just like this one. That's why I made the "everyday" app - so everyone can benefit from a chart like mine too.</p>
          <p>You don't even need to sign up. Create a chart, tell it what you're going to track, and then off you go. You can keep your chart up-to-date using the website, or the mobile app, or the Alexa skill, or the messenger chat, or... well, there's a lot of ways. There are even ways you can add to your chart automatically without needing to do anything manually.</p>
        </div>
    );
  }
}
