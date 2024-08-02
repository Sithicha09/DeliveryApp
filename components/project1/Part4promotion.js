import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Part4promotion(props) {
    return (
        <View style={{flex: 1}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold',marginLeft: 10 }}>Promotion</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ width: 300, height: 170, borderRadius: 10 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ width: 300, height: 170, borderRadius: 10 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ width: 300, height: 170, borderRadius: 10 }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
