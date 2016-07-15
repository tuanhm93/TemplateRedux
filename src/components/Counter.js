import React, {Component} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

class MyApp extends Component {
  constructor(props) {
    super(props);

  }

  _onPressInc() {
    this.props.actions.increase();
  }

  _onPressDec() {
    this.props.actions.decrease();
  }

  render() {
    const {state} = this.props;

    return (
      <View style={styles.container}>
        <Text>Current number: {state.count}</Text>
        <TouchableOpacity
          onPress = {this._onPressInc.bind(this)}
          style = {styles.button} >
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {this._onPressDec.bind(this)}
          style = {styles.button} >
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 30,
    marginTop: 10,
    borderRadius: 3,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#1e8668',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  textButton: {
    fontSize: 17,
    color: '#ffffff'
  }
});

export function stateToProps(state) {
  console.log(state);
  return {
    state: state.counter
  }
}

export const Layout =  MyApp;