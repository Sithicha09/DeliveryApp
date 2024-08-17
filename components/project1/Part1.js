import React from 'react';
import { Image, View } from 'react-native';


export default function Part1() {
    return (
        <View style={{ flex : 1 }}>
            <View style = {{ flexDirection : 'row'}}>
                <Image style={{flex :1, resizeMode : 'cover' , aspectRatio :16/11}} source={{uri: 'https://wallpapers.com/images/hd/eco-friendly-7-eleven-jfmegjsfu6lmwbdr.jpg'}}/>
            </View>
        </View>    
    );
}