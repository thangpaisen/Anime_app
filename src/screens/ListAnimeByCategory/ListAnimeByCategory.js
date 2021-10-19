import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import Header from './Header';
import imageImp from '../../assets/images/thumbnailLoading.png';
import {getAnimeByCategory} from '../../services/services';
import {useNavigation} from '@react-navigation/native';
import CartAnime from './../../components/CartAnime';
import Loading from './../../components/Loading';
import imageLoading from '../../assets/images/loading1.gif';

const ListAnimeByCategory = ({route}) => {
  const genres = route?.params?.genres || {};
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingOnEndReachedFL, setLoadingOnEndReachedFL] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAnimeByCategory(genres.slug).then(res => {
      setData(res.data);
      setPagination(res.pagination);
      setLoading(false);
    });
  }, []);
  const onEndReached = () => {
    if (pagination.currentPage <= pagination.totalPage) {
      setLoadingOnEndReachedFL(true);
      getAnimeByCategory(genres.slug, pagination.currentPage + 1).then(res => {
        setData([...data, ...res.data]);
        setLoadingOnEndReachedFL(false);
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title={genres.name} />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <CartAnime data={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          onEndReached={() => onEndReached()}
          onEndReachedThreshold={1}
        //   ListFooterComponentStyle={{flex:1, justifyContent: 'flex-end'}}
          ListFooterComponent={
            loadingOnEndReachedFL && (
              <View style={styles.loadingFooterFlatList}>
                <Image source={imageLoading} style={styles.imgLoaded} />
              </View>
            )
          }
        />
      )}
    </View>
  );
};

export default ListAnimeByCategory;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171821',
  },
  content: {
    marginLeft: 10,
    marginVertical: 10,
    width: (width - 30) / 2,
  },
  image: {
    width: (width - 30) / 2,
    height: 100,
    borderRadius: 4,
  },
  name: {
    fontSize: 14,
    marginTop: 4,
    color: 'white',
    marginRight: 10,
  },
  latestEpisode: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 14,
  },
  loadingFooterFlatList: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    maxHeight: 40,
  },
  imgLoaded: {
    width: 40,
    height: 130,
    resizeMode: 'contain',
  },
});
