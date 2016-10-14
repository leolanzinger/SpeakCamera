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

var CameraView = require('./cameraView.ios.js');
var videos = [require('./public/assets/videos/video0.mov'), require('./public/assets/videos/video1.mov'), require('./public/assets/videos/video2.mov')];
var hints = [require('./public/assets/images/hint0.png'), require('./public/assets/images/hint1.png'), require('./public/assets/images/hint2.png')];

export class VideoPage extends Component {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: false,
    skin: 'custom'
  };

  goDeeper(sel_word) {
    this.setState({paused:true});
    this.props.navigator.push({
        component: CameraView,
        navigationBarHidden: false,
        title: 'Recording...',
        passProps: {word: sel_word, index: this.props.index}
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.video} onPress={() => {this.setState({paused: !this.state.paused})}}>
          <Video
            source={videos[this.props.index]}
            style={styles.video}
            paused={this.state.paused}
            resizeMode='cover'
            repeat={true}
          />
        </TouchableOpacity>
        <View style={styles.controls}>
          <Image
            source={hints[this.props.index]}
            style={{width: 300, resizeMode: 'contain', marginBottom: 40}}
          />
          <TouchableHighlight
            underlayColor='rgba(255,255,255,0)'
            onPress={() => this.goDeeper(this.props.word)}
          >
            <Image
              source={require('./public/assets/images/camera.png')}
              style={{width: 80, height: 80}}
            />
          </TouchableHighlight>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  controls: {
    marginTop: 150,
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
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

module.exports = VideoPage;
