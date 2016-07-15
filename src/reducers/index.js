"use strict";

import { combineReducers } from 'redux';
import counter from './counterReducer.js';
import another from './anotherReducer.js';

//
export default combineReducers({
  counter,
  another
});


