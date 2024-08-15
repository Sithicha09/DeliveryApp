import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

export default function Memberpart3() {
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        
    };
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e6', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10,justifyContent:"space-between" ,marginTop:-30}}>
            {/* View ก้อนที่ 1 */}
            <View  style={{ marginLeft:20 }}>
                <Text>ไม่พบข้อมูลคะแนนหมดอายุ</Text>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection:"row" , marginRight:20}}>
                <TouchableOpacity onPress={onPressButton}>
                    <View style={{ padding: 5, backgroundColor: "#3355b2", borderRadius: 40 }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: 'white' ,margin:10,fontWeight: 'bold'}}>
                               รายละเอียด   
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
}