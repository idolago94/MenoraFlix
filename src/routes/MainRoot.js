import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Login from '../screens/Login'
import { connect } from 'react-redux'

const MainRoot = (props) => {
    return <View style={s.container}>
        {props.isConnected ? <Text>LoggedIn</Text> : <Login />}
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