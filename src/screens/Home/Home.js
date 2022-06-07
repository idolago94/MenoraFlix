import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Colors} from '../../utils/Enums'

const Home = () => {
    return (
        <View style={s.container}>
            <Text>Home</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.SCREEN_BG
    }
})

export default Home