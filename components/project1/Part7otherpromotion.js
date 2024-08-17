import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Part7otherpromotion(props) {
    return (
        <View style={{flex: 1}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold',marginLeft: 10,marginTop: 10 }}>โปรโมชั่นอื่นๆ</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://www.cpall.co.th/wp-content/uploads/2021/11/11.11-7Eleven_1.jpg' }}
                            style={{ width: 170, height: 260 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZBhlVCYtRPd9072_LuK1U2Jubub7TcZtzKmhbPlqs_5r2tiTo74NT0fzNsc2FI2jx5Y&usqp=CAU' }}
                            style={{width: 170, height: 260 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIR57HHvk3rGxRoEmVwMgX7vbWWDN8Ui_p44frsvn3zukSTyaXOM230WiPQ0ozllT1wQ&usqp=CAU' }}
                            style={{width: 170, height: 260}} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
