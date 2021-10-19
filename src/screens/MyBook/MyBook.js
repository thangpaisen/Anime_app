import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import Header from "./Header";
import MyTabs from "./MyTabs/MyTabs";

const MyBook = () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor="#171821"
                barStyle="light-content"
                // translucent={true} 
                // hidden={true}
            />
            <Header/>
            <MyTabs/>
        </View>
    )
}

export default MyBook

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#171821',
    }
})
