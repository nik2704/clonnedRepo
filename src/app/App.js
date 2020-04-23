import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import Err404 from '../components/err404/err404.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/' component={Err404} />
        </Switch>
      </div>
    )
  }
}

export default App;
