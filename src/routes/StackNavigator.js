import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Favourite } from '../screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
)

export default StackNavigator