import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getAnimeRecently} from '../../../services/services';
import CartAnime from './../../../components/CartAnime';
import imageNoResults from '../../../assets/images/noResults.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from "react-redux";
import {getDataBookmarks,removeBookmarks} from "../../../redux/actions/bookmarks"
const Bookmarks = () => {
  const bookmarks = useSelector(state => state.bookmarks)
  const dispatch =useDispatch()
  const handleOnRemoveBookmarks = () => {
    dispatch(removeBookmarks())
  };
  return (
    <View style={styles.bookmarks}>
      {bookmarks.length > 0 ? (
        <>
          <TouchableOpacity
            onPress={() => {
              handleOnRemoveBookmarks();
            }}
            style={{
              alignItems: 'flex-end',
              padding: 10,
              marginRight: 10,
            }}>
            <Icon name="trash" size={28} color="#fff" />
          </TouchableOpacity>
          <FlatList
            data={bookmarks}
            renderItem={({item}) => <CartAnime data={item} />}
            keyExtractor={item => item.slug}
            numColumns={2}
          />
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={imageNoResults}
            style={{
              width: 200,
              height: 200,
              resizeMode: 'contain',
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  bookmarks: {
    flex: 1,
    backgroundColor: '#000',
  },
});
