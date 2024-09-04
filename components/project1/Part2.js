import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Part2() {
    const navigation = useNavigation(); // ใช้ useNavigation เพื่อดึง navigation object

    return (
        <View style={{ flexDirection: 'row', marginTop: -30 }}>

            {/* การ์ดแรก */}
            <TouchableOpacity 
                style={{ flex: 1 }} 
                onPress={() => navigation.navigate('Productpage')} // ใส่ชื่อหน้าที่ต้องการจะนำทางไป
            >
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e6', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                    <View>
                        <Image style={{ width: 60, height: 60, borderRadius: 150 / 2 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0D3H8qtW_70BSrWjEqyeFFh4gaU_hy21Hw&s' }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 25 }}>8 delivery</Text>
                        <Text style={{ fontSize: 15 }}>สั่งดิ่ ส่งฟรีนะ</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* การ์ดที่สอง */}
            <TouchableOpacity 
                style={{ flex: 1 }} 
                onPress={() => navigation.navigate('Productpage')} // นำทางไปยัง Productpage
            >
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e6', marginHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                    <View>
                        <Image style={{ width: 60, height: 60, borderRadius: 150 / 2 }} source={{ uri: 'https://www.truemoney.com/wp-content/uploads/2021/06/truemoneywallet-7eleven-promotion-logo_AllOnline.png' }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 25 }}>All Online</Text>
                        <Text style={{ fontSize: 15 }}>ช็อปห่างไกลบ้าน</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    );
}
