import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home';
import UnitTypesList from './UnitTypesList';

// Firebase
import Rebase  from 're-base';

var base = Rebase.createClass({
  apiKey: "AIzaSyDj2qa9WZ4HAVDOzhe4h-jB_RqME7W86q4",
  authDomain: "hotel-b9224.firebaseapp.com",
  databaseURL: "https://hotel-b9224.firebaseio.com",
}, 'hotel-b9224');

class App extends Component {

  constructor() {
    super();

    this.state = {
      unitTypes: []
    }
  }

  componentDidMount() {
    base.syncState("unitTypes", {
      context : this,
      state : "unitTypes",
      asArray: true
    });

    base.bindToState("unitTypes", {
      context: this,
      state: "unitTypes",
      asArray: true
    });
  }

  render () {
    return (
      <Router>
        <div>
          <h1>Simple Hotel Admin</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/unit-types">Unit Types</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/unit-types" component={() => (<UnitTypesList unitTypes={ this.state.unitTypes } />)} />
        </div>
      </Router>
    )
  }
}

export default App;
