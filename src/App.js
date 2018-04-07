import React, { Component } from 'react';

import {
  Switch, Route
} from 'react-router-dom'

import './App.css';

import Title from './Components/Title';
import Home from './Components/Home';
import Signup from './Components/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/user' component={Signup} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;