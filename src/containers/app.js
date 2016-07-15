import React, { Component } from 'react';
import { Provider } from 'react-redux';

// 
import connectUtil from '../lib/utils/connectUtil.js';
import * as MyAppComponent from './MyApp.js';
const MyApp = connectUtil(MyAppComponent);

//
import configureStore from '../store/configureStore.js';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}