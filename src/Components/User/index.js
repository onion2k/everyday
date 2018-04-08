import React, { Component } from 'react';
import {
  Switch, Route
} from 'react-router-dom'

import './User.css';

export default class User extends Component {
  render(){
    let match = this.props.match;
    return (
        <div className={"user"}>
          <Switch>
            <Route exact path={match.url}><p>Chart</p></Route>
            <Route path={match.url+'/preferences'}><p>Preferences</p></Route>
          </Switch>
        </div>
    );
  }
}
