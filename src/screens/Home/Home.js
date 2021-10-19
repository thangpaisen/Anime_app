import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,ScrollView,StatusBar,RefreshControl } from 'react-native'
import Header from "./Header";
import Slider from "./Slider";
import ListAnimeHome from "./../../components/ListAnimeHome";
import {getAnimeRecently,getAnimeRecommended,getAnimeRanking} from '../../services/services'
import {getDataBookmarks} from "../../redux/actions/bookmarks"
import {getDataHistoryWatch} from "../../redux/actions/historyWatch"
import { useDispatch } from "react-redux";
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const Home = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const dispatch = useDispatch()
    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(0).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
      dispatch(getDataBookmarks()) 
      dispatch(getDataHistoryWatch()) 
  }, [])
    return (
        
        <View style={styles.container}>
        <StatusBar 
            backgroundColor="#171821"
            barStyle="light-content"
            // translucent={true} 
            // hidden={true}
          />
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false} 
                    refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
        }

            >
                <Slider refreshing={refreshing}/>
                <ListAnimeHome title={'Anime mới cập nhật'} slug={'recently'} refreshing={refreshing}/>
                <ListAnimeHome title={'Đề xuất cho bạn'} slug={'recommended'}  refreshing={refreshing}/>
                <ListAnimeHome title={'Xem nhiều trong ngày'} slug={'rankingDay'}  refreshing={refreshing}/>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#171821',
    }
})
