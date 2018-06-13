import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';

// Actions
import { fetchErrorListData } from '../../actions/apiActions';

// Reducers
import { getAppStatus } from '../../reducers/apiReducer';

// Components
import { ErrorList } from '../../components/errorList/ErrorList';

class Home extends Component {
  componentDidMount() {
    this.props.onFetchErrorListData();
  }

  render() {
    return (
       <ErrorList />
    )
  }
}

const mapStateToProps = state => ({
  appStatus: getAppStatus(state),
});

export default withRouter(connect(
  mapStateToProps,
  {
    onFetchErrorListData: fetchErrorListData,
  }
)(Home));