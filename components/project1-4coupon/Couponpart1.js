import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

export default function Couponpart1() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
            <View style={{ flexDirection: "row"}}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center',paddingVertical: 15,backgroundColor: 'gray'}}>
                    <Text style={{color: '#FFFFFF',fontSize: 16,fontWeight: 'bold',}}>เฉพาะสมาชิก</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1,alignItems: 'center',paddingVertical: 15,backgroundColor: '#2A75E0'}}>
                    <Text style={{color: '#FFFFFF',fontSize: 16,fontWeight: 'bold',}}>คูปองอื่นๆ</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}