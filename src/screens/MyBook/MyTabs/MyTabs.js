import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import History from './History';
import Bookmarks from './Bookmarks';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Bookmarks"
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarIndicatorStyle: {height: 0},
        // tabBarLabelStyle: {
        //     fontSize: 16,
        //     color: '#fff',
        //     fontWeight: 'bold',
        //     textTransform: 'none'
        // },
        tabBarStyle: {backgroundColor: '#171821'},
      }}>
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? '#09bff2' : '#fff',
                fontWeight: 'bold',
              }}>
              Yêu thích
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused ? '#09bff2' : '#fff',
                fontWeight: 'bold',
              }}>
              Lịch sử
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
