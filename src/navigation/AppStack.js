import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./../screens/Home/Home";
import ListAllAnime from "./../screens/ListAllAnime/ListAllAnime";
import { TransitionPresets } from '@react-navigation/stack';
import Details from "./../screens/Details/Details";
import WatchVideo from "./../screens/WatchVideo/WatchVideo";
const Stack = createStackNavigator();

const AppStack = () => {
    return (
    <Stack.Navigator
    initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
        >
        <Stack.Screen name="Home" component={Home} options={{
        ...TransitionPresets.SlideFromRightIOS,
      }}/>
       <Stack.Screen name="ListAllAnime" component={ListAllAnime} options={{
        ...TransitionPresets.SlideFromRightIOS,
      }}/>
       <Stack.Screen name="Details" component={Details} options={{
        ...TransitionPresets.SlideFromRightIOS,
      }}/>
<Stack.Screen name="WatchVideo" component={WatchVideo} 
    // options={{
    //     ...TransitionPresets.SlideFromRightIOS,
    //   }}
      />
       </Stack.Navigator>
    )
}

export default AppStack
