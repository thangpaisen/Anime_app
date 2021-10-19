import React from 'react';
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
import { WebView } from 'react-native-webview';
// import ReactHlsPlayer from 'react-hls-player';
const WatchVideo = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <VideoPlayer
      onBack={() => navigation.goBack()}
      onEnd={() => navigation.goBack()}
      navigator={navigation}
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
    />
      </View>

  );
};

export default WatchVideo;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});
