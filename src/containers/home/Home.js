import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// actions
import { fetchErrorListData } from '../../actions/apiActions';

// reducers
import { getAppStatus } from '../../reducers/apiReducer';

class Home extends Component {
  componentDidMount() {
    this.props.onFetchErrorListData();
  }

  render() {
    return (
      <div>Home</div>
    )
  }
}

const mapStateToProps = state => ({
  appStatus: getAppStatus(state),
});

export default connect(
  mapStateToProps,
  {
    onFetchErrorListData: fetchErrorListData,
  }
)(Home);