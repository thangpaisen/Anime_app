import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView,FlatList} from 'react-native';
import Header from './Header';
import SearchTrending from './SearchTrending';
import HistorySearch from './HistorySearch';
import CartAnime from './../../components/CartAnime';
import {getAnimeRecently, searchAnime} from '../../services/services';
import Loading from './../../components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Search = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [dataSearch, setDataSearch] = useState([]);
  const [dataHistorySearch, setDataHistorySearch] = useState([]);
  const [showData, setShowData] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const addItemHistorySearch=(value)=>{
      const data=[...dataHistorySearch];
      var index = data.findIndex(x => x === value )
      if(index ===-1){
          data.push(value);
          AsyncStorage.setItem('HISTORY_SEARCH', JSON.stringify(data))
      }
      getDataHistorySearch();
  }
  const deleteHistorySearch=()=>{
       AsyncStorage.setItem('HISTORY_SEARCH',JSON.stringify([]))
       getDataHistorySearch();
  }
  const handleOnSearch = value => {
    setShowData(true);
    setLoadingSearch(true);
    setValueSearch(value);
    addItemHistorySearch(value);
    searchAnime(value).then(res => {
      setDataSearch(res);
      setLoadingSearch(false);
    });
  };
  const handleOnHideData = value => {
    setShowData(false);
  };
  const getDataHistorySearch = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('HISTORY_SEARCH');
      const data = jsonValue != null ? JSON.parse(jsonValue) : [];
      setDataHistorySearch(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
      getDataHistorySearch()
  }, []);
  return (
    <View style={styles.container}>
      <Header
        handleOnSearch={handleOnSearch}
        handleOnHideData={handleOnHideData}
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
      />
      {!showData ? (
        <View>
          <SearchTrending handleOnSearch={handleOnSearch} />
          <HistorySearch handleOnSearch={handleOnSearch} dataHistorySearch={dataHistorySearch} deleteHistorySearch={deleteHistorySearch}/>
        </View>
      ) : loadingSearch ? (
        <Loading />
      ) : dataSearch.length > 0 ? (
        <FlatList
            data={dataSearch}
            renderItem={({item}) =>
                    <CartAnime data={item}/>
            }
            keyExtractor={(item,index) => item.slug}
            numColumns={2}
          />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Không tìm thấy Anime nào
          </Text>
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171821',
  },
});
