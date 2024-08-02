import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Part2() {
    return (
        <View style={{ flexDirection: 'row', marginTop: -30 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                <View style={{}}>
                    <Image style={{ width: 60, height: 60, borderRadius: 150 / 2 }} source={require('../../assets/week3/room-6.jpg')} />
                </View>
                <View>
                    <Text style={{ fontSize: 25 }}>8 delivery</Text>
                    <Text style={{  fontSize: 15 }}>สั่งดิ่ ส่งฟรีนะ</Text>
                </View>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                <View style={{}}>
                    <Image style={{ width: 60, height: 60, borderRadius: 150 / 2 }} source={require('../../assets/week3/room-6.jpg')} />
                </View>
                <View>
                    <Text style={{ fontSize: 25 }}>8 delivery</Text>
                    <Text style={{ fontSize: 15 }}>สั่งดิ่ ส่งฟรีนะ</Text>
                </View>
            </View>

        </View>

    );
} 