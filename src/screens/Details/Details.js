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
  FlatList
} from 'react-native';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {getAnimeDetails} from './../../services/services';
import imageImp from '../../assets/images/thumbnailLoading.png';
import {joinCategory} from './../../utils/index';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
import Loading from './../../components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from "react-redux";
import {getDataBookmarks,addToBookmarks} from "../../redux/actions/bookmarks"
import { addToHistoryWatch } from "./../../redux/actions/historyWatch";
import { Colors } from "./../../constants/Colors";
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
const Details = ({route}) => {
  const dataAnime = route?.params?.data || '';
  const [categories, setCategories] = useState('');
  const [animeDetails, setAnimeDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [isBookmarks, setIsBookmarks] = useState(false);
  const navigation = useNavigation();
    const dispatch = useDispatch()
    const dataBookmarks = useSelector(state => state.bookmarks)
    const historyWatch = useSelector(state => state.historyWatch)
  useEffect(() => {
    setLoading(true);
    getAnimeDetails(dataAnime.slug).then(data => {
      setAnimeDetails(data);
      setLoading(false);
    });
    var index = dataBookmarks.findIndex(x => x.slug === dataAnime.slug )
    if(index !== -1)
        setIsBookmarks(true);
  }, []);
//   console.log('daa',data);
  const handleAddBookmarks=() => {
      if(dataBookmarks.findIndex(x => x.slug === dataAnime.slug )===-1)
        dispatch(addToBookmarks(dataAnime))
  }
  const lastWatched =()=>{
      var lastWatched = historyWatch.find(x => x.slug===dataAnime.slug)
      return lastWatched.lastWatched?.full_name
  }
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
       backgroundColor="#171821"
                barStyle="light-content"
        // hidden={true}
      />
      <Header />
      <ScrollView>
        <View style={{style: styles.thumbnail}}>
          <Image
            source={{uri: dataAnime.thumbnail} || imageImp}
            style={{width: width, height: height / 3}}
          />
          <LinearGradient
            colors={['transparent', '#000']}
            style={styles.coating}
          />
          <View style={styles.title}>
            <Text style={styles.nameAnime} numberOfLines={2}>
              {dataAnime.name}
            </Text>
            <Text style={styles.totalViewAnime}>
              {animeDetails?.views
                ?.toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ' || '? '}
              lượt xem
            </Text>
          </View>
        </View>
        {!loading?
        <View style={{flex:1}}>
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
        {animeDetails?.episodes?.length>0?
        <View style={styles.playVideo}>
          <TouchableOpacity
            style={styles.buttonPlayVideo}
            onPress={() => {
              navigation.navigate('WatchVideo');
               dispatch(addToHistoryWatch({
                            slug:dataAnime.slug,
                            name:dataAnime.name,
                            thumbnail:dataAnime.thumbnail,
                            lastWatched:animeDetails?.episodes[0]
                        }))
            }}>
            <Icon name="play" size={24} color="white" />
            <Text style={styles.textButton}> Xem ngay </Text>
          </TouchableOpacity>
          {historyWatch.findIndex(x => x.slug===dataAnime.slug)!==-1&&
          <TouchableOpacity style={styles.buttonPlayVideo}
          onPress={() => {
              navigation.navigate('WatchVideo');
            }}>
            <Icon name="play" size={24} color="white" />
            <Text style={styles.textButton}
                numberOfLines={1} ellipsizeMode="tail"
            >
             {` ${lastWatched()} `}
            </Text>
          </TouchableOpacity>}
        </View>:
        <Text style={{color:'white',fontSize:16,padding:20,color:Colors.focused}}>
            Đây là phim sắp chiếu, hãy bấm nút theo dõi để nhận thông báo khi có tập mới nhé!
        </Text>
        }
        <View style={styles.react}>
          <View style={styles.itemReact}>
            <TouchableOpacity onPress={() =>{
                handleAddBookmarks();
            }}>
              <Icon
                name={dataBookmarks.findIndex(x => x.slug === dataAnime.slug )!==-1 ? 'heart' : 'heart-outline'}
                size={35}
                color={dataBookmarks.findIndex(x => x.slug === dataAnime.slug )!==-1 ? 'red' : 'white'}
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
        {animeDetails?.episodes?.length>0&&
        <View style={styles.listEpisodes}>
          <Text style={styles.titleListEpisodes}>Danh sách tập</Text>
          <View style={styles.episodes}>
            {animeDetails?.episodes?.map(item => (
              <TouchableOpacity
                key={item.slug}
                style={styles.itemEpisodes}
                onPress={() => {
                  navigation.navigate('WatchVideo');
                    dispatch(addToHistoryWatch({
                            slug:dataAnime.slug,
                            name:dataAnime.name,
                            thumbnail:dataAnime.thumbnail,
                            lastWatched:item
                        }))
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    textAlign: 'center'
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>}
        </View>:<Loading/>}
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
    paddingHorizontal:5,
  },
  titleListEpisodes: {
      marginLeft:5,
    fontSize: 18,
    color: '#e7e7e7',
  },
  episodes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemEpisodes: {
    paddingVertical:8,
    width:(width-50)/4,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#333',
    marginHorizontal: 5,
    marginTop: 10,
  },
  playVideo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonPlayVideo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    width: width / 2.8,
    marginVertical: 10,
  },
  textButton: {
      flex:1,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    // paddingHorizontal:,
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
