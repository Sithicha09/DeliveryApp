import React from 'react';
import { ScrollView,  Text,  View } from 'react-native';
import Couponpart1 from '../../components/project1-4coupon/Couponpart1';
import Couponpart2 from '../../components/project1-4coupon/Couponpart2';


export default function Couponpage() {
    return (
        <ScrollView style={{backgroundColor:'#e6e6e6'}}>
            <View style={{ flex: 1 }}>
                <Couponpart1/>
                <Couponpart2/>

                    
            </View>
        </ScrollView>
    );
}