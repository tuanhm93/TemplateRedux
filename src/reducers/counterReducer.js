import * as ACTION_TYPES from '../actions/actionTypes.js';


const initialState = {
  count: 100
};

export default function counter(state = initialState, action = {}) {
  console.log('Counter reducer');
  
  switch(action.type) {
    case ACTION_TYPES.INCREASE:
      return {
        count: state.count + 1
      }

    case ACTION_TYPES.DECREASE:
      return {
        count: state.count - 1
      }

    default:
      return state
  }
}