import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Productpart8() {
    return (
        <View style={{ padding: 20 }}>
            <View>
                <Text style={{marginBottom:10,fontSize:20, fontWeight: 'bold'}}>แนะนำโปรสุดคุ้ม</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image 
                    style={{ borderRadius: 10, flex: 1, resizeMode: 'cover', aspectRatio: 16 / 8 }} 
                    source={{ uri: 'https://7elevenweb.s3.ap-southeast-1.amazonaws.com/banner/6058b07e4b4b4c249c1e5e8eae7435a3.jpg' }} 
                />
            </View>
        </View>
    );
}
