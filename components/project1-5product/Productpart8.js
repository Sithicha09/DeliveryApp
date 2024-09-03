import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Productpart8() {
    return (
        <View style={{ padding: 20 }}>
            <View>
                <Text>awejroijwer</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ borderRadius: 10, flex: 1, resizeMode: 'cover', aspectRatio: 16 / 8 }} source={require("../../assets/week3/room-1.jpg")}></Image>
            </View>
        </View>
    );
}