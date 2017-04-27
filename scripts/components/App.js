import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import autobind from 'autobind-decorator';

import Home from './Home';
import UnitTypesList from './UnitTypesList';
import UnitTypeForm from './UnitTypeForm';
import UnitsList from './UnitsList';
import UnitForm from './UnitForm';

// Firebase
import Rebase  from 're-base';

var base = Rebase.createClass({
  apiKey: "AIzaSyDj2qa9WZ4HAVDOzhe4h-jB_RqME7W86q4",
  authDomain: "hotel-b9224.firebaseapp.com",
  databaseURL: "https://hotel-b9224.firebaseio.com",
}, 'hotel-b9224');

@autobind
class App extends Component {
  constructor() {
    super();

    this.state = {
      unitTypes: [],
      unitType: {},
      units: []
    }

    this.uuidV4 = require('uuid/v4');
  }

  componentDidMount() {
    base.syncState("unitTypes", {
      context : this,
      state : "unitTypes",
      asArray: true
    });

    base.syncState("units", {
      context : this,
      state : "units",
      asArray: true
    });

    base.bindToState("unitTypes", {
      context: this,
      state: "unitTypes",
      asArray: true
    });

    base.syncState("units", {
      context : this,
      state : "units",
      asArray: true
    });
  }

  saveUnitType(unitType) {
    if(unitType.id === null) {
      unitType.id = this.uuidV4();
      this.state.unitTypes.push(unitType);
    }
    else {
      this.state.unitTypes.map((ut) => {
        if(ut.id === unitType.id) {
          this.state.unitType = ut;
        }
      })
    }

    this.setState({ unitTypes: this.state.unitTypes });
  }

  saveUnit(unit) {
    if(unit.id === null) {
      unit.id = this.uuidV4();
      this.state.units.push(unit);
    }
    else {
      this.state.units.map((u) => {
        if(u.id === unit.id) {
          this.state.unit = u;
        }
      })
    }

    this.setState({ units: this.state.units });
  }

  render () {
    return (
      <Router>
        <div>
          <h1>Simple Hotel Admin</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/unit-types">Unit Types</Link></li>
            <li><Link to="/units">Units</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/unit-types" component={() => (<UnitTypesList unitTypes={ this.state.unitTypes } />)} />
          <Route path="/unit-type/:unitTypeId?"
                 component={(route) => (<UnitTypeForm id={ route.match.params.unitTypeId }
                                                      unitTypes={ this.state.unitTypes }
                                                      saveUnitType={ this.saveUnitType } />)}
          />
          <Route path="/units" component={() => (<UnitsList units={ this.state.units } />)} />
          <Route path="/unit/:unitId?"
                 component={(route) => (<UnitForm id={ route.match.params.unitId }
                                                      units={ this.state.units }
                                                      saveUnit={ this.saveUnit } />)}
          />
        </div>
      </Router>
    )
  }
}

export default App;
