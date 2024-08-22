import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome } from "@expo/vector-icons";
import HomeStack from './HomeStack';
import Couponpage from '../screens/project1/Couponpage';
import Notipage from '../screens/project1/Notipage';
import Memberpage from '../screens/project1/Memberpage';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }} >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: "หน้าหลัก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Couponpage"
                component={Couponpage}
                options={{
                    tabBarLabel: "คูปองของฉัน",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="credit-card" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Notipage"
                component={Notipage}
                options={{
                    tabBarLabel: "แจ้งเตือน",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="bell" color={color} size={size} />),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Memberpage"
                component={Memberpage}
                options={{
                    tabBarLabel: "สมาชิก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );



}
