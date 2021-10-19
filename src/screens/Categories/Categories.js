import React from 'react'
import { StyleSheet, Text, View,FlatList,Dimensions,TouchableOpacity } from 'react-native'
import { Colors } from "./../../constants/Colors";
import Header from "./Header";
import {GENRES} from "../../constants/constants"
import { useNavigation } from "@react-navigation/native";
const Categories = () => {
    // console.log('GENRES',GENRES)
    const navigation =useNavigation()
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.listCategory}>
                <FlatList
                data={GENRES}
                renderItem={({item}) =>
                    <TouchableOpacity style={styles.itemCategory}
                        onPress={() =>{
                            navigation.navigate('ListAnimeByCategory',{genres: item})
                        }}
                    >
                        <Text style={styles.textCategory}>{item.name}</Text>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.slug}
                numColumns={3}
            />
            </View>
        </View>
    )
}

export default Categories
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.background,
    },
    listCategory:{
        // marginTop:10,
        paddingHorizontal:5,
    },
    itemCategory:{
        marginHorizontal:5,
        marginTop:10,
        width:(width-40) / 3,
        paddingVertical:20,
        backgroundColor: '#333',
        borderRadius:10,

    },
    textCategory:{
        fontSize:16,
        color: Colors.text,
        textAlign: 'center'
    }
})
