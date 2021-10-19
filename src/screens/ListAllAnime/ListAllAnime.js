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
import {getAnimeRecently} from '../../services/services';
import {useNavigation} from '@react-navigation/native';
import CartAnime from "./../../components/CartAnime";

const ListAllAnime = ({route}) => {
  const data = route?.params?.data || [];
  const title = route?.params?.title || '';

  return (
    <View style={styles.container}>
      <Header title={title} />
        <FlatList
            data={data}
            renderItem={({item}) =>
                    <CartAnime data={item}/>
            }
            keyExtractor={(item,index) => item.slug}
            numColumns={2}
          />
    </View>
  );
};

export default ListAllAnime;
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
});
