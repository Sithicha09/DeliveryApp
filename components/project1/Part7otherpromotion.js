import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Part7otherpromotion(props) {
    return (
        <View style={{flex: 1}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold',marginLeft: 10,marginTop: 10 }}>โปรโมชั่นอื่นๆ</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ width: 160, height: 260 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{width: 160, height: 260 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{width: 160, height: 260}} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
