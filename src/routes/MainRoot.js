import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const MainRoot = () => {
    return <View style={s.container}>
        <Text>MainRoot</Text>
    </View>
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MainRoot