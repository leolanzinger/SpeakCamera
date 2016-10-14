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
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';

var videos = [require('./public/assets/videos/video0.mov'), require('./public/assets/videos/video1.mov'), require('./public/assets/videos/video2.mov')];
var tries = [require('./public/assets/videos/try0.mov'), require('./public/assets/videos/try1.mov'), require('./public/assets/videos/try2.mov')];

export class VideoResult extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'cover',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    pausedTop: true,
    pausedBottom: true,
    skin: 'custom'
  };

  goDeeper() {
    this.props.navigator.push({
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.videotop} onPress={() => {this.setState({pausedTop: !this.state.pausedTop})}}>
        <Video
          source={videos[this.props.index]}
          style={styles.videotop}
          paused={this.state.pausedTop}
          resizeMode={this.state.resizeMode}
          repeat={true}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.videobottom} onPress={() => {this.setState({pausedBottom: !this.state.pausedBottom})}}>
        <Video
          source={tries[this.props.index]}
          style={styles.videobottom}
          paused={this.state.pausedBottom}
          resizeMode={this.state.resizeMode}
          repeat={true}
        />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20
  },
  controls: {
    marginTop: 250,
    height: 150,
    padding: 20,
    alignItems: 'center'
  },
  words: {
    fontSize: 25,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: '#fff0',
    color: '#fff',
    marginBottom: 20
  },
  videotop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    height: 300
  },
  videobottom: {
    position: 'absolute',
    top: 150,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 300
  }
});

module.exports = VideoResult;
