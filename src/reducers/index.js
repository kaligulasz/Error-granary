import { combineReducers } from 'redux';

import apiData from './apiReducer';

/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  apiData,
});

export default AppReducer;
