import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Header = ({title}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.buttonBack} onPress={() =>{
          navigation.goBack()
      }}>
        <Icon name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.textHeader} numberOfLines={1}>
        {title}
      </Text>
      <Icon name="arrow-back-outline" size={24} color="transparent" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 12,
    backgroundColor: '#171821',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonBack: {},
  textHeader: {
    fontSize: 20,
    paddingHorizontal:30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
