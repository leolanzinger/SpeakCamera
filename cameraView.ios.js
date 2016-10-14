/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import Video from 'react-native-video';

var tries = [require('./public/assets/videos/try0.mov'), require('./public/assets/videos/try1.mov'), require('./public/assets/videos/try2.mov')];

var VideoResult = require('./videoResult.ios.js');
var i;

class CameraView extends Component {
  constructor(props) {
    super(props);
    i = this.props.index
  }

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'custom'
  };

  goDeeper() {
    this.props.navigator.push({
        component: VideoResult,
        title: 'Compare and check',
        navigationBarHidden: false,
        passProps: {index: i}
    });
  }

  startRecording() {
    if (this.camera) {
      this.camera.capture({mode: Camera.constants.CaptureMode.video})
          .then((path) => this.goDeeper(path))
          .catch(err => console.error(err));
      this.setState({
        isRecording: true
      });
    }
  }

  stopRecording() {
    if (this.camera) {
      this.camera.stopCapture();
      this.setState({
        isRecording: false
      });
      this.goDeeper();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={tries[this.props.index]}
          style={styles.video}
          paused={this.state.paused}
          resizeMode='cover'
          repeat={true}
        />
        <View style={[styles.overlay, styles.bottomOverlay]}>
        {
          this.state.paused
          &&
          <TouchableOpacity
            onPress={() => {this.setState({paused: !this.state.paused})}}
          >
            <Image
              source={require('./public/assets/images/record.png')}
              style={{width: 80, height: 80}}
            />
          </TouchableOpacity>
          ||
          <TouchableOpacity
            onPress={() => {
              this.setState({paused: !this.state.paused});
              this.goDeeper();
            }}
          >
            <Image
              source={require('./public/assets/images/stop.png')}
              style={{width: 80, height: 80}}
            />
          </TouchableOpacity>
        }
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
  },
  bottomOverlay: {
    bottom: 80,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  }
});

module.exports = CameraView;
