import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.buttonBack} onPress={() =>{
          navigation.goBack()
      }}>
        <Icon name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 12,
    backgroundColor: 'transparent',
    // backgroundColor: 'blue',
    position: 'absolute',
    top:StatusBar.currentHeight,
    right:0,
    left:0,
    zIndex:9999,
  },
});
