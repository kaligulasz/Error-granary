import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Actions
import { fetchErrorListData } from '../../actions/apiActions';

// Reducers
import { getAppStatus, getIssueList } from '../../reducers/apiReducer';

// Components
import ErrorList from '../../components/errorList/ErrorList';

class Home extends Component {
  componentDidMount() {
    this.props.onFetchErrorListData();
  }

  render() {
    const {
      issueList,
    } = this.props;

    return (
      <ErrorList list={issueList} />
    );
  }
}

const mapStateToProps = state => ({
  appStatus: getAppStatus(state),
  issueList: getIssueList(state),
});

export default withRouter(connect(
  mapStateToProps,
  {
    onFetchErrorListData: fetchErrorListData,
  },
)(Home));
