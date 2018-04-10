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
    let username = u.displayName || "";
    let email = u.email;
    let emailVerified = u.emailVerified;

    let emailVerifiedWarning = null;

    if (email && !emailVerified) {
      emailVerifiedWarning = <div style={{ padding: '30px 10vw', backgroundColor: '#ffdddd' }}>You have created your chart by email but you haven't verified yet.</div>
    }
  
    return (
        <div className={"user"}>
          <Welcome name={match.params.user} />
          {emailVerifiedWarning}
          <Switch>
            <Route exact path={match.url}><Calendar days={[]} /></Route>
            <Route path={match.url+'/add'}><p>New Chart</p></Route>
            <Route path={match.url+'/preferences'}><p>Preferences</p></Route>
          </Switch>
        </div>
    );
  }
}
