import {
  FETCH_DATA_DONE,
  FETCH_DATA_FAILED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
} from '../actions/apiActions';

const apiData = (state = {
  errorList: [],
  appStatus: 'loading',
  login: false,
  token: null,
}, action) => {
  switch (action.type) {
    case FETCH_DATA_DONE:
      return {
        ...state,
        errorList: action.payload,
        appStatus: 'successfull',
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        appStatus: 'failed',
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        login: true,
        token: action.token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};

export const getAppStatus = state => state.apiData.appStatus;
export const getLoginStatus = state => state.apiData.login;
export const getIssueList = state => state.apiData.errorList;

export default apiData;
