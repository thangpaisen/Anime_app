import React,{useEffect, useState} from 'react';
import {StyleSheet, Text, View,Dimensions, BackHandler,
  Alert } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
// import VideoPlayer from 'react-native-video-player';
import {useNavigation} from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import {getAnimeEpisodes} from './../../services/services';
import Orientation from 'react-native-orientation-locker';
const WatchVideo = ({route}) => {
    const {idAnime,tap} = route.params;
    const navigation = useNavigation();
    const [videooo, setVideo] = React.useState({});
    useEffect(() => {
        getAnimeEpisodes(idAnime,tap).then(data => {
        setVideo(data);
    });
    }, [])
      useEffect(() => {
        const backAction = () => {
        Orientation.lockToPortrait()
        return false;
        };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
      <View style={styles.container}>
        <VideoPlayer
      onBack={() =>{
            var initial = Orientation.getInitialOrientation();
            Orientation.lockToPortrait()
            navigation.goBack()
      }}
      onEnd={() => navigation.goBack()}
      navigator={navigation}
      onEnterFullscreen={() => Orientation.lockToLandscapeLeft()}
      onExitFullscreen={() => Orientation.lockToPortrait()}
      source={{uri: `${videooo.videoSource}`}}
    />
      </View>
  );
};

export default WatchVideo;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'black',
        justifyContent: 'center',
    }
});
