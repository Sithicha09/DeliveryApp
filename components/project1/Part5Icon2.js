import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon2 from '../Icon/MyIcon2';



export default function Part5Icon2() {
    return (

        <View style={{flex: 1,backgroundColor:'gray',marginTop: 20, marginBottom:10}}>
              
            <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 , alignItems:'center'}}>
                <Image style={{ width: 80, height: 80, borderRadius: 150 / 2 }} source={require('../../assets/week3/room-6.jpg')} />
                <MyIcon2 title="Coffee" name="coffee" size={30} color="orange" />
                <MyIcon2 title="Bath" name="bath" size={30} color="orange" />
                <MyIcon2 title="Car" name="car" size={30} color="orange" />
                <MyIcon2 title="Paw" name="paw" size={30} color="orange" />
            </View>
        </View>
    );
}