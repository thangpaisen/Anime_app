import React from 'react'
import { View, Text } from 'react-native'
import Routes from "./Routes";
import { Provider } from 'react-redux'
import store from '../redux/store';

const Providers  = () => {
    return (
        <Provider store={store}> 
            <Routes/>
        </Provider>
    )
}

export default Providers
