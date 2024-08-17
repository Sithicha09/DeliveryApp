import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Part2() {
    return (
        <View style={{ flexDirection: 'row', marginTop: -30 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e6', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                <View style={{}}>
                    <Image style={{ width: 60, height: 60, borderRadius: 150 / 2 }} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0D3H8qtW_70BSrWjEqyeFFh4gaU_hy21Hw&s'}} />
                </View>
                <View>
                    <Text style={{ fontSize: 25 }}>8 delivery</Text>
                    <Text style={{  fontSize: 15 }}>สั่งดิ่ ส่งฟรีนะ</Text>
                </View>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e6', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                <View style={{}}>
                    <Image style={{ width: 60, height: 60, borderRadius: 150 / 2 }} source={{uri:'https://www.truemoney.com/wp-content/uploads/2021/06/truemoneywallet-7eleven-promotion-logo_AllOnline.png'}} />
                </View>
                <View>
                    <Text style={{ fontSize: 25 }}>All Online</Text>
                    <Text style={{ fontSize: 15 }}>ช็อปห่างไกลบ้าน</Text>
                </View>
            </View>

        </View>

    );
} 