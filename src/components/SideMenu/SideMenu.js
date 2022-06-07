import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { logout } from '../../actions/Logout'

const SideMenu = (props) => {
    return (
        <SafeAreaView style={s.safeArea}>
            <View style={s.container}>
                <TouchableOpacity style={s.listItem} onPress={props.logout}>
                    <Text style={s.listItemText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    safeArea: { flex: 1 },
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    listItem: {
        padding: 10,
        borderTopColor: 'black',
        borderTopWidth: 1
    },
    listItemText: {
        fontSize: 20,
    }
})

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(null, mapDispatchToProps)(SideMenu)