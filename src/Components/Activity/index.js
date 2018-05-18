import React, { Component } from 'react';
import {
  Switch, Route
} from 'react-router-dom'

import './Activity.css';

import Calendar from '../../Components/Calendar';

export default class Activity extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: []
    }
  }
  update(){}
  render(){
    let match = this.props.match;
    return (
        <div className={"user"}>
        <Calendar days={this.state.days} update={this.update} />
        <Switch>
          <Route exact path={match.url}><p>Chart</p></Route>
          <Route path={match.url+'/add'}><p>New Chart</p></Route>
        </Switch>
        </div>
    );
  }
}
