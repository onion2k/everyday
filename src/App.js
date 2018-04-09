import React, { Component } from 'react';

import {
  Switch, Route
} from 'react-router-dom'

import './App.css';

import Title from './Components/Title';
import Home from './Components/Home';
import Activity from './Components/Activity';
import Signup from './Components/Signup';
import Login from './Components/Login';
import User from './Components/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Signup} />
          <Route path='/activity/:activity' component={Activity} />
          <Route path='/u/:user' component={User} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;