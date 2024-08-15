import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Memberpart1() {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row' }}>
                {/* <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 11 }} source={require('../../assets/week3/room-6.jpg')} /> */}
                <View style={{ flex: 1, backgroundColor: '#4f73d4', width: 100, height: 300, borderRadius: 10 }}>
                    <View style={{ alignItems: 'flex-end',margin:20 }}>
                        <Text style={{marginTop:20,fontSize: 20,fontWeight: 'bold',color:'white'}}>
                            ศิธิฌา บรรทุกธรรม
                        </Text>
                        <View style={{marginTop:15}}>
                        <Image style={{width:70 ,height:70,borderRadius:70/2}} source={require('../../assets/week3/profile-4.jpg')}/>
                        </View>
                        <Text style={{marginTop:10,fontSize: 50,fontWeight: 'bold',color:'white'}}>
                            50
                        </Text>
                        <Text style={{fontSize: 15,fontWeight: 'bold',color:'white'}}>
                            คะแนน
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}