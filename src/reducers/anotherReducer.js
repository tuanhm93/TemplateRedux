import * as ACTION_TYPES from '../actions/actionTypes.js';


const initialState = {
  another: 1
};

export default function another(state = initialState, action = {}) {
  switch(action.type) {
    case ACTION_TYPES.ANOTHER_TYPE:
      return {
        another: state.another + 1
      }

    default:
      return state
  }
}