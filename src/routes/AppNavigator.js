import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Favourite } from '../screens';
import SideMenu from '../components/SideMenu';
import { Colors } from '../utils/Enums';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
)

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

const TabsNavigator = () => (
    <Tab.Navigator 
    screenOptions={{ 
        headerShown: false, 
        tabBarStyle: { backgroundColor: Colors.SCREEN_BG },
        tabBarInactiveTintColor: Colors.PRIMARY
    }} 
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favourite" component={Favourite} options={{ tabBarBadge: 1 }} />
    </Tab.Navigator>
)

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator