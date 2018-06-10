import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    const thisContext = this;
    axios.get('//localhost:3000/api/users')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        thisContext.props.history.push('/login');
      });
  }

  render() {
    return (
      <div>Home</div>
    )
  }
}

export default Home;