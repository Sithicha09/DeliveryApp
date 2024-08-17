import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Notipart1() {
    return (
        <View style={{ flex: 1,margin:40}}>
            <View style={{marginTop:10}}>
               <Text style={{textAlign: "center",fontSize:20,fontWeight: 'bold' }}>รายการย้อนหลัง</Text>
            </View>
        </View>
    );
}