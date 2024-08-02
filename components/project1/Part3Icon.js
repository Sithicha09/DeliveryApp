import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon from '../Icon/Myicon';


export default function Part3() {
    return (

        <View style={{flex: 1,marginTop: 10}}>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 }}>
                <MyIcon title="Wifi" name="wifi" size={30} color="orange" />
                <MyIcon title="Coffee" name="coffee" size={30} color="orange" />
                <MyIcon title="Bath" name="bath" size={30} color="orange" />
                <MyIcon title="Car" name="car" size={30} color="orange" />
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 }}>
                <MyIcon title="Wifi" name="wifi" size={30} color="orange" />
                <MyIcon title="Coffee" name="coffee" size={30} color="orange" />
                <MyIcon title="Bath" name="bath" size={30} color="orange" />
                <MyIcon title="Car" name="car" size={30} color="orange" />
            </View>
        </View>
    );
}