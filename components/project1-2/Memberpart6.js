import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Memberpart6() {
    const benefits = [
        { "id": "1", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
        { "id": "3", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg" },
        { "id": "4", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg" },
        { "id": "5", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];
    return (
        <View style={{marginLeft:10,marginBottom:40}}>
            <Text style={{ fontSize: 15,marginBottom:10,marginLeft:10}}>แลกคะแนน</Text>
            <FlatList
                horizontal={true}
                data={benefits}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ margin: 10  }}>
                                <Image style={{ width: 300, height: 150 }} source={{ uri: item.uri }} />
                                
                            </View>
                        );
                    }
                }

            />
        </View>
    );
}
