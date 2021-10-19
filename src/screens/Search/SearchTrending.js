import {Avatar} from 'react-native-elements';
import React from 'react';
import {StyleSheet, Text, View, Pressable,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {deleteHistorySearch} from '../../redux/actions/historySearch';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import {fetchProductsSearch} from '../../redux/actions/productsSearch';

const SearchTrending = ({handleOnSearch}) => {
    const navigation = useNavigation();
//   const dispatch = useDispatch();
  const dataSearchTrending = [
    'One Piece',
    'Boku no pico',
    'Rem',
    'Overflow',
    'Naruto',
    'Dragon Ball',
    'Isekai',
    'Sole leveling',
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Tìm kiếm phổ biến</Text>
      </View>
      <View style={styles.listItemSearches}>
        {dataSearchTrending.map((item, index) => 
          <Pressable style={styles.itemSearch} key={index}
           onPress={() =>{
                        handleOnSearch(item)
                    }}
            >
            <Text style={styles.textSearch}>{item}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default SearchTrending;

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
    color: 'white',
    fontWeight: 'bold',
  },
  listItemSearches: {
    marginTop:4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemSearch: {
    marginRight: 10,
    marginTop: 12,
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#d4edbe',
  },
  textSearch: {
    fontSize: 14,
  },
});