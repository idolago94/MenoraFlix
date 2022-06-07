import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Favourite } from '../screens';
import { Colors } from '../utils/Enums';
import { connect } from 'react-redux';
import { intersection } from 'lodash';

const Tab = createBottomTabNavigator();

const TabsNavigator = (props) => {
    const favCount = props.favouriteMovies.length - intersection(props.favouriteMovies, props.shownMovies).length
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: Colors.SCREEN_BG },
                tabBarInactiveTintColor: Colors.PRIMARY
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favourite" component={Favourite} options={{ tabBarBadge: favCount > 0 ? favCount : null }} />
        </Tab.Navigator>
    )
}

const mapStateToProps = state => {
    return {
        favouriteMovies: state.user.favouriteMovies,
        shownMovies: state.user.shownMovies
    }
}

export default connect(mapStateToProps)(TabsNavigator)