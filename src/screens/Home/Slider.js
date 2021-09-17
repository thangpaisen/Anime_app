import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {getSlideAnime} from '../../services/services';
const Slider = ({refreshing}) => {
  const [dataSlide, setDataSlide] = useState([]);
  useEffect(() => {
    getSlideAnime()
      .then(res => {
        setDataSlide(res);
      })
      .catch(err => {
        console.log('err', err);
      });
    return () => {};
  }, [refreshing]);
  return (
    <View style={styles.slider}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        showPagination
        paginationStyleItem={{
          width: 6,
          height: 6,
          marginLeft: 0,
          marginRight: 6,
        }}
        paginationStyle={{top: 0, right: 4, padding: 0, marginBottom: 4}}
        data={dataSlide}
        renderItem={({item}) => (
          <Pressable
            style={{}}
            onPress={() => {
              //   console.log(item)
            }}>
            <Image
              source={{uri: item.thumbnail}}
              style={{width: width, height: height / 3.6}}
            />
            <LinearGradient
              colors={['transparent', '#000']}
              style={styles.coating}
            />
            <View style={styles.title}>
              <Text style={styles.nameAnime}>{item.name}</Text>
              <Text style={styles.totalViewAnime}>{item.views}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Slider;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  slider: {
    // flex: 1,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coating: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.6,
  },
  title: {
    position: 'absolute',
    bottom: 4,
    left: 10,
  },
  nameAnime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  totalViewAnime: {
    fontSize: 13,
    color: 'white',
  },
});
