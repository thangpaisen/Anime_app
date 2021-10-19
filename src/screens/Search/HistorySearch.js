import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
// const dataHistorySearch = [
//   'One Piece',
//   'Boku no pico',
//   'Rem',
//   'Overflow',
//   'Naruto',
//   'Dragon Ball',
//   'Isekai',
//   'Sole leveling',
// ];
const HistorySearch = ({handleOnSearch,dataHistorySearch,deleteHistorySearch}) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>History</Text>
        <TouchableOpacity
          onPress={() => {
            deleteHistorySearch()
          }}>
          <Icon name="trash" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.listItemSearches}>
        {dataHistorySearch.map((item, index) => (
          <Pressable
            style={styles.itemSearch}
            key={index}
            onPress={() => {
              handleOnSearch(item);
            }}>
            <Text style={styles.textSearch}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default HistorySearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  listItemSearches: {
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemSearch: {
    marginRight: 10,
    marginTop: 12,
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#f7f0f0',
  },
  textSearch: {
    fontSize: 14,
  },
});
