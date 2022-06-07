import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Login from '../screens/Login'
import { connect } from 'react-redux'
import AppNavigator from './AppNavigator'

const MainRoot = (props) => {
    return <View style={s.container}>
        {props.isConnected||true ? <AppNavigator/> : <Login />}
    </View>
}

const s = StyleSheet.create({
    container: {
        flex: 1
    }
})

const mapStateToProps = state => {
    return {
        isConnected: state.user.isConnected
    }
}

export default connect(mapStateToProps)(MainRoot)