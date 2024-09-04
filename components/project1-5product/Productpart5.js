import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

export default function Productpart5() {
    return (
        <View style={{ margin: 20, borderWidth: 1, borderColor: '#ff7800', backgroundColor: '#ffedce', borderRadius: 10, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ marginLeft: 20 }}>
                <Text style={{}}>คุณมี xx คูปองพร้อมใช้งาน</Text>
            </View>
            <View style={{ backgroundColor: "#ff7800", borderRadius: 10, margin: 10, width: 70, height: 35 }}>
                <Text style={{ textAlign: "center",marginTop:5 }}>คูปอง</Text>
            </View>
        </View>
    );
}
