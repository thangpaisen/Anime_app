import React from 'react';
import {View, Text} from 'react-native';

import Home from './../screens/Home/Home';
import ListAllAnime from './../screens/ListAllAnime/ListAllAnime';
import {TransitionPresets} from '@react-navigation/stack';
import Details from './../screens/Details/Details';
import WatchVideo from './../screens/WatchVideo/WatchVideo';
import Search from './../screens/Search/Search';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './../screens/Settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import MyBook from "./../screens/MyBook/MyBook";
import Categories from "./../screens/Categories/Categories";
import ListAnimeByCategory from "./../screens/ListAnimeByCategory/ListAnimeByCategory";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyTabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ListAllAnime"
        component={ListAllAnime}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen 
        name="Details"
        component={Details}
        options={
          {
            ...TransitionPresets.SlideFromRightIOS,
          }
        }
      />
      <Stack.Screen 
        name="ListAnimeByCategory" 
        component={ListAnimeByCategory}
        options={
          {
            ...TransitionPresets.SlideFromRightIOS,
          }
        }
      />
      <Stack.Screen name="WatchVideo" component={WatchVideo} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#171821',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="home"
                size={25}
                color={focused ? '#09bff2' : '#adadad'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="apps"
                size={25}
                color={focused ? '#09bff2' : '#adadad'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyBook"
        component={MyBook}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="heart"
                size={28}
                color={focused ? '#09bff2' : '#adadad'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="person-circle-outline"
                size={28}
                color={focused ? '#09bff2' : '#adadad'}
              />
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};
export default AppStack;
