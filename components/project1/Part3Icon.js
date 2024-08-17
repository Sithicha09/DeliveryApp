import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon2 from '../Icon/MyIcon2';



export default function Part3Icon() {
    return (

        <View style={{flex: 1,marginTop: 10}}>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 }}>
                <MyIcon2 title="ออลล์ เมมเบอร์" name="barcode" size={30} color="#33c456" />
                <MyIcon2 title="โปรโมชั่น" name="shopping-basket" size={30} color="#33c456" />
                <MyIcon2 title="ภารกิจพิชิต" name="flag" size={30} color="#33c456" />
                <MyIcon2 title="7 ใกล้ฉัน" name="map-pin" size={30} color="#33c456" />
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 }}>
                <MyIcon2 title="เกม" name="gamepad" size={30} color="#33c456" />
                <MyIcon2 title="แลก" name="dropbox" size={30} color="#33c456" />
                <MyIcon2 title="คูปอง" name="tags" size={30} color="#33c456" />
                <MyIcon2 title="ใบเสร็จ" name="paperclip" size={30} color="#33c456" />
            </View>
        </View>
    );
}