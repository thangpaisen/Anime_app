import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,ScrollView,Image,Dimensions,FlatList } from 'react-native'
import Header from "./Header";
import imageImp from '../../assets/images/thumbnailLoading.png'
import {getAnimeRecently} from '../../services/services'

const Cart =({data})=>{
    return(
<View style={styles.content}>
                        <Image style={styles.image} 
                            source={
                                {uri: data?.thumbnail}||
                                imageImp
                                } />
                        <View
                            style={{
                            position: 'absolute',
                                backgroundColor: '#333',
                            top: 4,
                            left: 0,
                            marginRight: 30,
                            padding: 2,
                            paddingRight:6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            }}>
                            <Text
                            style={styles.latestEpisode}
                            numberOfLines={1}
                            ellipsizeMode="tail">
                            {data?.latestEpisode.name ||data?.time } 
                            </Text>
                        </View>
                        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                            {data?.name} 
                        </Text>
                        </View>
    )
}
const ListAllAnime = ({route}) => {
    const data = route?.params?.data ||[]
    const title = route?.params?.title ||''
    const [animeRecently, setAnimeRecently] = useState([])

    useEffect(() => {
        getAnimeRecently()
        .then((res) => {
            setAnimeRecently(res)
        })
    }, [])
    return (
        <View style={styles.container}>
            <Header title={title}/>
            <ScrollView>
                <View style={{
                    // marginTop: 10,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                {data.map((item, index) =>
                        <Cart data={item} key={item.slug}/>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default ListAllAnime
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
               backgroundColor:'#171821',
    },
    content: {
    marginLeft: 10,
    marginVertical: 10,
    width:(width-30)/2,
  },
  image: {
    width:(width-30)/2,
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
})
