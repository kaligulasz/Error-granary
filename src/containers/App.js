import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Actions
import { loginSuccessful } from '../actions/apiActions';

// Components
import LoginView from './loginView/LoginView';
import Home from './home/Home';

class App extends Component {
  componentDidMount() {
    const authToken = sessionStorage.getItem('authToken');

    if (authToken) {
      this.props.onLoginSuccessful(authToken);
    }
  }

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

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {
    onLoginSuccessful: loginSuccessful,
  }
)(App);