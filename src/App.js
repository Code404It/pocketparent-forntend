import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import Kids from './containers/Kids'
import NavBar from './components/NavBar'
import AddNewKid from './components/AddNewKid'

class App extends Component {
  render() {
    return (
      <div id="main-container">
      <Router>
        < NavBar />
          <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route exact path="/kids/new" component={ AddNewKid } />
            <Route exact path="/kids" component={ Kids } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
