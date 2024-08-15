import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon2 from '../Icon/MyIcon2';



export default function Part3Icon() {
    return (

        <View style={{flex: 1,marginTop: 10}}>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 }}>
                <MyIcon2 title="Wifi" name="wifi" size={30} color="orange" />
                <MyIcon2 title="Coffee" name="coffee" size={30} color="orange" />
                <MyIcon2 title="Bath" name="bath" size={30} color="orange" />
                <MyIcon2 title="Car" name="car" size={30} color="orange" />
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 }}>
                <MyIcon2 title="Wifi" name="wifi" size={30} color="orange" />
                <MyIcon2 title="Coffee" name="coffee" size={30} color="orange" />
                <MyIcon2 title="Bath" name="bath" size={30} color="orange" />
                <MyIcon2 title="Car" name="car" size={30} color="orange" />
            </View>
        </View>
    );
}