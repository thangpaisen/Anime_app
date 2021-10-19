import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import imageImp from '../assets/images/thumbnailLoading.png';
import {useNavigation} from '@react-navigation/native';
import Loading from './Loading';
import {
  getAnimeRecently,
  getAnimeRecommended,
  getAnimeRanking,
} from '../services/services';

const Cart = ({data}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.content}
      onPress={() => navigation.navigate('Details', {data: data || ''})}>
      <Image style={styles.image} source={{uri: data?.thumbnail} || imageImp} />
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#333',
          top: 4,
          left: 0,
          marginRight: 30,
          padding: 2,
          paddingRight: 6,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
        }}>
        <Text
          style={styles.latestEpisode}
          numberOfLines={1}
          ellipsizeMode="tail">
          {data?.latestEpisode.name || data?.time}
        </Text>
      </View>
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {data?.name}
      </Text>
    </Pressable>
  );
};
export default function ListAnimeHome({title, slug, refreshing}) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (slug === 'recently')
      getAnimeRecently()
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    if (slug === 'recommended')
      getAnimeRecommended()
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    if (slug === 'rankingDay')
      getAnimeRanking('day')
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
  }, [refreshing]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTitle}>{title}</Text>
        <TouchableOpacity
          style={styles.viewAll}
          onPress={() => {
            navigation.navigate('ListAllAnime', {title: title, data: data});
          }}>
          <Text style={styles.textViewAll}>Tất cả</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Cart data={item} />}
          horizontal
          keyExtractor={item => item.slug}
          extraData={item => item.slug}
        />
      )}
    </View>
  );
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textViewAll: {
    fontSize: 14,
    color: '#7a7a7a',
    marginRight: 10,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
  },
  content: {
    marginLeft: 10,
    marginTop: 10,
    width: width / 2,
  },
  image: {
    width: width / 2,
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
});
