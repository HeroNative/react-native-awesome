/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  AppRegistry,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>
//       //     Welcome to React Native!
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     To get started, edit App.js
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     {instructions}
//       //   </Text>
//       // </View>
//     );
//   }
// }

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText: true};

    setInterval(()=>{
      this.setState(previousState=>{
        return {showText: !previousState.showText};
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class Touchables extends Component{
  _onPressButton(){
    Alert.alert('You tapped the button!')
  }
  _onLongPressButton(){
    Alert.alert('You long-pressed the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={this._onPressButton} background={Platform.OS === 'android'?TouchableNativeFeedback.SelectableBackground():''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              TouchableWithoutFeedback
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Touchable With Long Press
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    paddingTop: 20,
    color: 'white'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
