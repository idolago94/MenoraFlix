import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../components/SideMenu';
import { Colors } from '../utils/Enums';
import TabsNavigator from './TabNavigator'
import StackNavigator from './StackNavigator'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={() => <SideMenu />}
        screenOptions={{
            title: 'Menora Flix',
            headerStyle: { backgroundColor: 'red' },
            headerTitleStyle: { color: Colors.PRIMARY },
            headerTintColor: Colors.PRIMARY
        }}>
        <Drawer.Screen name="Home" component={TabsNavigator} />
        <Drawer.Screen name="Favourite" component={StackNavigator} />
    </Drawer.Navigator>
)

export default DrawerNavigator