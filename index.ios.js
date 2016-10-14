/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS
} from 'react-native';

var wordList = require('./wordList.ios.js');

export default class SpeakCamera extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: wordList,
          title: '🇬🇧',
        }}
        style={{flex: 1}}
        barTintColor='#ff8d15'
        titleTextColor='#fff'
        tintColor='#fff'
        translucent={false}
      />
    );
  }
}

AppRegistry.registerComponent('SpeakCamera', () => SpeakCamera);
