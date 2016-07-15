import * as ACTION_TYPE from './actionTypes.js';

export function increase() {
  console.log('hiii');
  return {
    type: ACTION_TYPE.INCREASE
  }
}

export function decrease() {
  return {
    type: ACTION_TYPE.DECREASE
  }
}