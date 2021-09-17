import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import imageLoading from '../assets/images/loading1.gif'
const Loading = () => {
    return (
        <View style={styles.loading}>
            <Image source={imageLoading||{uri:'https://images6.alphacoders.com/102/1029037.jpg'}} style={styles.image}/>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    loading:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    image:{
        width:45,
        height:130,
        resizeMode: 'contain'
    }
})
