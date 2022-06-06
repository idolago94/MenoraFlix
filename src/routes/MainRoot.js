import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Login from '../screens/Login'

const MainRoot = () => {
    return <View style={s.container}>
        <Login />
    </View>
}

const s = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MainRoot