import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from "./../../constants/Colors";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>Yêu thích</Text>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        padding:12,
    },
    textHeader:{
        fontWeight: 'bold',
        fontSize:20, 
        color:Colors.text,
    }
})
