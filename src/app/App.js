import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../page/homepage.component';
import Err404 from '../components/err404/err404.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      Hello, World!
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/' component={Err404} />
        </Switch>
      </div>
    )
  }
}

export default App;
