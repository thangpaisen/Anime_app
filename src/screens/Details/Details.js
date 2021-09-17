import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {getAnimeDetails} from './../../services/services';
import imageImp from '../../assets/images/thumbnailLoading.png';
import {joinCategory} from './../../utils/index';
import { useNavigation } from "@react-navigation/native";
import {useIsFocused} from '@react-navigation/native';
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
const ItemEpisode = item => {
  return (
    <View style={styles.itemEpisodes}>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
        }}>
        {item.name}
      </Text>
    </View>
  );
};
const Details = ({route}) => {
  const slug = route?.params?.slug || '';
  const [categories, setCategories] = useState('');
  const [animeDetails, setAnimeDetails] = useState({});
  const navigation =useNavigation();
  useEffect(() => {
    getAnimeDetails(slug).then(data => {
      setAnimeDetails(data);
    });
  }, []);
  console.log('slug', animeDetails.slug);
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        // hidden={true}
      />
      <Header />
      <ScrollView>
        <View style={{style: styles.thumbnail}}>
          <Image
            source={{uri: animeDetails.thumbnail} || imageImp}
            style={{width: width, height: height / 3}}
          />
          <LinearGradient
            colors={['transparent', '#000']}
            style={styles.coating}
          />
          <View style={styles.title}>
            <Text style={styles.nameAnime} numberOfLines={2}>
              {animeDetails.name}
            </Text>
            <Text style={styles.totalViewAnime}>
              {/* {item.views} */}
              {animeDetails?.views
                ?.toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}{' '}
              lượt xem
            </Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{color: '#e7e7e7', fontSize: 14}}>
            {animeDetails?.description}
          </Text>
        </View>
        <View style={styles.categories}>
          <Text style={{color: '#e7e7e7', fontSize: 14}} numberOfLines={2}>
            Thể loại: {joinCategory(animeDetails?.genres)}
          </Text>
        </View>

        <View style={styles.playVideo}>
          <TouchableOpacity style={styles.buttonPlayVideo} onPress={() =>{
              navigation.navigate('WatchVideo')
          }}>
            <Icon name="play" size={24} color="white" />
            <Text style={styles.textButton}>Xem ngay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPlayVideo}>
            <Icon name="play" size={24} color="white" />
            <Text style={styles.textButton} numberOfLines={1}>
              {' '}
              Xem Tập 7 - Quyết chiến! Bầu cử Hội trưởng Hội học sinh
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.react}>
          <View style={styles.itemReact}>
            <TouchableOpacity>
              <Icon
                name={true ? 'heart' : 'heart-outline'}
                size={35}
                color={true ? 'red' : 'white'}
              />
            </TouchableOpacity>
            <Text style={styles.textItemReact}>Theo Dõi</Text>
          </View>
          <View style={styles.itemReact}>
            <TouchableOpacity>
              <Icon name="chatbox-outline" size={35} color="white" />
            </TouchableOpacity>
            <Text style={styles.textItemReact}>Bình luận</Text>
          </View>
          <View style={styles.itemReact}>
            <TouchableOpacity>
              <Icon name="share-social-outline" size={35} color="white" />
            </TouchableOpacity>
            <Text style={styles.textItemReact}>Chia sẻ</Text>
          </View>
          <View style={styles.itemReact}>
            <TouchableOpacity>
              <Icon name="star-outline" size={35} color="white" />
            </TouchableOpacity>
            <Text style={styles.textItemReact}>Đánh giá</Text>
          </View>
        </View>
        <View style={styles.listEpisodes}>
          <Text style={styles.titleListEpisodes}>Danh sách tập</Text>
          <View style={styles.episodes}>
            {animeDetails?.episodes?.map(item => (
              <TouchableOpacity style={styles.itemEpisodes} key={item.slug} onPress={() =>{
              navigation.navigate('WatchVideo')
          }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171821',
    // backgroundColor:'red'
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
    fontSize: 22,
    // paddingVertical:4,
    fontWeight: 'bold',
    color: 'white',
  },
  totalViewAnime: {
    fontSize: 14,
    paddingVertical: 4,
    color: 'white',
  },
  categories: {
    // marginTop: 10,
    paddingHorizontal: 10,
  },
  description: {
    paddingHorizontal: 10,
  },
  listEpisodes: {
    padding: 10,
  },
  titleListEpisodes: {
    fontSize: 18,
    color: '#e7e7e7',
  },
  episodes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemEpisodes: {
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#333',
    marginRight: 10,
    marginTop: 10,
  },
  playVideo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  buttonPlayVideo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    maxWidth: width / 2.5,
    marginVertical: 10,
  },
  textButton: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 4,
  },
  react: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  itemReact: {
    //   justifyContent: 'center',
    alignItems: 'center',
  },
  textItemReact: {color: '#fff', fontSize: 12, fontWeight: 'bold'},
});
