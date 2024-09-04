import React from "react";
import { View, TextInput, Image, Text } from "react-native";
import MyIcon2 from "../Icon/MyIcon2";

export default function Productpart2() {
    return (
        <View style={{ marginTop: -20, padding: 10, borderRadius: 20, backgroundColor: 'white' }}>
            <View style={{ margin: 20, padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 20 }}>
                {/* View ก้อนที่ 1 */}
                <View >
                    <TextInput style={{ fontSize: 20 }} placeholder="ค้นหา" />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bfffa9', marginHorizontal: 20, paddingVertical: 10, borderRadius: 40, borderWidth: 2, borderColor: '#30d200' }}>
                    <View>
                        <Text style={{ fontSize: 15 }}>สั่งดิ่ ส่งฟรีนะ</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Image style={{ width: 40, height: 40, borderRadius: 150 / 2 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0D3H8qtW_70BSrWjEqyeFFh4gaU_hy21Hw&s' }} />
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', marginHorizontal: 20, paddingVertical: 10, borderRadius: 40, borderWidth: 2, borderColor: '#e6e6e6' }}>
                    <View>
                        <Text style={{ fontSize: 15 }}>ช็อปห่างไกลบ้าน</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Image style={{ width: 40, height: 40, borderRadius: 150 / 2 }} source={{ uri: 'https://www.truemoney.com/wp-content/uploads/2021/06/truemoneywallet-7eleven-promotion-logo_AllOnline.png' }} />
                    </View>

                </View>
            </View>
        </View>
    );
}
