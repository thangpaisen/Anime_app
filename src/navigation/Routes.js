import React from 'react'
import { View, Text } from 'react-native'
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { NavigationContainer } from '@react-navigation/native';
const Routes = () => {
    return (
        <NavigationContainer>
            {true?<AppStack/>:<AuthStack/>}
        </NavigationContainer>
    )
}

export default Routes
