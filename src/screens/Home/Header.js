import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.logoApp}>
                <Text style={{fontSize:20,fontWeight: 'bold',color:'white'}}>Animee</Text>
            </View>
            <TouchableOpacity>
                <Icon name="search-outline" size={24} color='white' />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        padding: 12,
        backgroundColor: '#171821',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
