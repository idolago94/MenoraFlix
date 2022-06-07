import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Favourite } from '../screens';
import { Colors } from '../utils/Enums';
import { connect } from 'react-redux';
import { intersection } from 'lodash';
import imgSrc from '../utils/Images'

const Tab = createBottomTabNavigator();

const TabsNavigator = (props) => {
    const favCount = props.favouriteMovies.length - intersection(props.favouriteMovies, props.shownMovies).length
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: Colors.SCREEN_BG },
                tabBarInactiveTintColor: Colors.PRIMARY,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarIcon: () => <Image style={s.tabIcon} source={imgSrc.home} /> }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarBadge: favCount > 0 ? favCount : null,
                    tabBarIcon: () => <Image style={s.tabIcon} source={imgSrc.star} />
                }}
            />
        </Tab.Navigator>
    )
}

const s = StyleSheet.create({
    tabIcon: {
        height: 30,
        width: 30
    }
})

const mapStateToProps = state => {
    return {
        favouriteMovies: state.user.favouriteMovies,
        shownMovies: state.user.shownMovies
    }
}

export default connect(mapStateToProps)(TabsNavigator)