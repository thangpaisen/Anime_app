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
import { useDispatch,useSelector } from "react-redux";
import {getDataHistoryWatch,removeHistoryWatch} from "../../../redux/actions/historyWatch"
const History = () => {
  const [data, setData] = useState([]);
  const dispatch =useDispatch()
  const dataHistoryWatch = useSelector(state => state.historyWatch)
  const handleOnRemoveHistory = () => {
      console.log('a')
    dispatch(removeHistoryWatch())
  };
  return (
    <View style={styles.history}>
      {dataHistoryWatch.length > 0 ? (
        <>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              padding: 10,
              marginRight: 10,
            }}
            onPress={() => {
              handleOnRemoveHistory();
            }}
            >
            <Icon name="trash" size={28} color="#fff" />
          </TouchableOpacity>
          <FlatList
            data={dataHistoryWatch}
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

export default History;

const styles = StyleSheet.create({
  history: {
    flex: 1,
    backgroundColor: '#000',
  },
});
