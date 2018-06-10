import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

// Components
import LoginView from './loginView/LoginView';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginView} />
        </div>
      </Router>
    )
  }
}

export default App;