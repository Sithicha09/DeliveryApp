import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from '../screens/project1/Homepage';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Homepage">
            <Stack.Screen
                name="Homepage"
                component={Homepage}
                options={{ title: "Home" , headerShown : false }}
            />
            
        </Stack.Navigator>
    );


}
