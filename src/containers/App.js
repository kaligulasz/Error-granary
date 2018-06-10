import React, { Component } from 'react';
import axios from 'axios';
import LoginView from './login/Login';

class App extends Component {
  componentDidMount() {
    axios.get('//localhost:3000/api/users')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <LoginView />
    )
  }
}

export default App;