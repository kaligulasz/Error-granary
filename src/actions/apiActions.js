import axios from 'axios';

import { getErrorList } from './errorActions';

import { getToken } from '../reducers/apiReducer';

export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const FETCH_DATA_DONE = 'FETCH_DATA_DONE';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const getDataDone = data => ({
  type: FETCH_DATA_DONE,
  data,
});

export const getDataFailed = error => ({
  type: FETCH_DATA_FAILED,
  error,
});

export const loginSuccessful = token => ({
  type: LOGIN_SUCCESSFUL,
  token,
});

export const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const fetchErrorListData = () =>
  (dispatch, getState) => {
    const token = sessionStorage.getItem('authToken');

    return axios({
      method: 'get',
      url: '//localhost:3000/api/users',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'x-access-token',
        'x-access-token': token,
      }
    })
      .then(function (response) {
        dispatch(getErrorList(response));
        dispatch(getDataDone(response));
      })
      .catch(function (error) {
        console.log(error);
      })
  };

export const loginAuthentication = (credentials) =>
  dispatch => (
    axios({
      method: 'post',
      url: '//localhost:3000/api/authenticate',
      data: {
        name: credentials.name,
        password: credentials.password,
      },
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
      .then(function (response) {
        if (response.data.success) {
          dispatch(loginSuccessful(response.data.token));
          sessionStorage.setItem('authToken', response.data.token)
        } else {
          dispatch(loginFailed());
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  );
