import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
const WatchVideo = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <VideoPlayer
      onBack={() => navigation.goBack()}
      onEnd={() => navigation.goBack()}
      // onEnd={()=>onClose()}
      navigator={navigation}
      source={{
        isNetwork: true,
        type: '',
        uri: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
      }}
      hls={true} 
    />
      </View>

  );
};

export default WatchVideo;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});
