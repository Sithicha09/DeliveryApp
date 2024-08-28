import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Productpart1() {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row' }}>
                {/* <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 11 }} source={require('../../assets/week3/room-6.jpg')} /> */}
                <View style={{ flex: 1, backgroundColor: 'green', width: 100, height: 250, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    <View style={{flex:1,margin:20 ,justifyContent:'flex-end',marginBottom:40}}>
                        <Text style={{marginTop:20,fontSize: 20,fontWeight: 'bold',color:'white'}}>
                           สั่งทันที
                        </Text>
                       
                        <Text style={{fontSize: 18,fontWeight: 'bold',color:'white'}}>
                            ที่อยู่.......
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}