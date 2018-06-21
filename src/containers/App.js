import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Actions
import { loginSuccessful } from '../actions/apiActions';

// Reducers
import { getLoginStatus } from '../reducers/apiReducer';

// Components
import LoginView from './loginView/LoginView';
import Home from './home/Home';
import MainMenu from '../components/menu/Menu';
import PrivateRoute from '../components/privateRoute/PrivateRoute';

class App extends Component {
  componentWillMount() {
    const authToken = sessionStorage.getItem('authToken');

    if (authToken) {
      this.props.onLoginSuccessful();
    }
  }

  render() {
    return (
      <Fragment>
        <MainMenu />
          <Router>
            <div className="container">
              <PrivateRoute path='/' component={Home} exact loginStatus={this.props.loginStatus} />
              <Route path="/login" component={LoginView} />
            </div>
          </Router>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
});

export default connect(
  mapStateToProps,
  {
    onLoginSuccessful: loginSuccessful,
  },
)(App);