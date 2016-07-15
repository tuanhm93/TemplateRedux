/*
 * All middlewares, configure goes there
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // async task
import createLogger from 'redux-logger'; // log state between an action
import reducers from '../reducers';

export default function configureStore() {
  const logger = createLogger();
  const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
  const store = createStoreWithMiddleware(reducers);

  return store;
}