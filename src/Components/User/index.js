import React, { Component } from 'react';
import {
  Switch, Route
} from 'react-router-dom'

import './User.css';

import Welcome from '../../Components/Welcome';
import Calendar from '../../Components/Calendar';

export default class User extends Component {
  render(){
    let match = this.props.match;
    return (
        <div className={"user"}>
          <Welcome name={match.params.user} />
          <Switch>
            <Route exact path={match.url}><Calendar days={[]} /></Route>
            <Route path={match.url+'/add'}><p>New Chart</p></Route>
            <Route path={match.url+'/preferences'}><p>Preferences</p></Route>
          </Switch>
        </div>
    );
  }
}
