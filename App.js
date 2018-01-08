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
  TextInput
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

export default class PizzaTranslator extends Component{
  constructor(props){
    super(props);
    this.state = {text:''};
  }
  render() {
    return (
      <View style={{padding:10}}>
        <TextInput
          style={{height:40}}
          placeholder="Type here to translate!"
          onChangeText={(text)=>this.setState({text})}
        />
        <Text style={{padding:10, fontSize:42}}>
          {this.state.text.split(' ').map((word)=>word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
