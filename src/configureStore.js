import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';

/**
 * Configure Store
 * @return {Object} - The whole state tree the your application
 */
const configureStore = () => {
  let store;
  const middlewares = [
    thunkMiddleware, // lets us dispatch() functions
  ];

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
      });
    }
  } else {
    store = applyMiddleware(...middlewares)(createStore)(reducer);
  }

  return store;
};

export default configureStore;
