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
  TouchableHighlight
} from 'react-native';

var VideoPage = require('./videoPage.ios.js');

var wordTitles = ['Hackdays are fun, aren\'t they?', 'How are you doing?', 'Ok that\'s it, time for a beer!'];

class WordList extends Component {
  // initialize data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        0,1,2
      ])
    };
  }
  goDeeper(i) {
    this.props.navigator.push({
        component: VideoPage,
        navigationBarHidden: false,
        title: 'Listen and record yourself',
        passProps: {word: wordTitles[i], index: i}
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff', fontSize: 35, marginTop: 30}}>Pick one sentence</Text>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sec, i) =>
            <TouchableHighlight
              underlayColor='rgba(255,255,255,0)'
              onPress={() => this.goDeeper(rowData)}
            >
              <Text style={styles.words}>{wordTitles[rowData]}</Text>
            </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8d15',
    padding: 20
  },
  list: {
    paddingTop: 60
  },
  words: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontWeight: '400',
    color: '#ff8d15',
    padding: 30,
    backgroundColor: '#fff',
    marginBottom: 40
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
});

module.exports = WordList;
