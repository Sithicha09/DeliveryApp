import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon2 from '../Icon/MyIcon2';



export default function Part5Icon2() {
    return (

        <View style={{flex: 1,backgroundColor:'#e6e6e6',marginTop: 20, marginBottom:10}}>
              
            <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 , alignItems:'center'}}>
                <Image style={{ width: 80, height: 80, borderRadius: 150 / 2 }} source={{uri:'https://www.truemoney.com/wp-content/uploads/2021/06/truemoneywallet-7eleven-promotion-logo_ALLmember.png'}} />
                <MyIcon2 title="บาลโค้ด" name="barcode" size={30} color="#3a47c8" />
                <MyIcon2 title="คะแนน" name="bitcoin" size={30} color="#3a47c8" />
                <MyIcon2 title="แลกคูปอง" name="tags" size={30} color="#3a47c8" />
                <MyIcon2 title="บุญ" name="american-sign-language-interpreting" size={30} color="#3a47c8" />
            </View>
        </View>
    );
}