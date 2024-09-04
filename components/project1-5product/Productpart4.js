import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Productpart4() {
    return (
        <View style={{ flexDirection: 'row' }}>
            <ScrollView horizontal={true}>
                <View style={{flex: 1,marginBottom:10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10, width: 170, height: 70,shadowColor: '#000',shadowOffset: { width: 2, height: 2 },shadowOpacity: 0.2,shadowRadius: 5, elevation: 5, }}>
                    <View style={{marginLeft:30}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 150 / 2 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9j9x2aj-G0MA0iGLX5V96ZwDS0lF770E0qw&s' }} />
                    </View>
                    <View style={{marginRight:30}}>
                        <Text style={{ fontSize: 15 }}>แพ็กเกจ</Text>
                    </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10, width: 170, height: 70,shadowColor: '#000',shadowOffset: { width: 2, height: 2 },shadowOpacity: 0.2,shadowRadius: 5, elevation: 5, }}>
                    <View style={{marginLeft:30}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 150 / 2 }} source={{ uri: 'https://thumb.ac-illust.com/ff/ff50948e1e424243d368b218da5dfb64_t.jpeg' }} />
                    </View>
                    <View style={{marginRight:30}}>
                        <Text style={{ fontSize: 15 }}>สินค้าสั่งจอง</Text>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10, width: 170, height: 70,shadowColor: '#000',shadowOffset: { width: 2, height: 2 },shadowOpacity: 0.2,shadowRadius: 5, elevation: 5, }}>
                    <View style={{marginLeft:30}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 150 / 2 }} source={{ uri: 'https://e7.pngegg.com/pngimages/966/563/png-clipart-iphone-true-corporation-truemove-h-business-true-move-company-limited-false-electronics-company.png' }} />
                    </View>
                    <View style={{marginRight:30}}>
                        <Text style={{ fontSize: 15 }}>ทรู</Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
} 