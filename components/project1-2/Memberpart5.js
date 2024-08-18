import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Memberpart5() {
    const benefits = [
        { "id": "1", "uri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAya2FMJgXSuq7kchKJNoZ5bT_H_IAIt8zA&s" },
        { "id": "2", "uri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkZug8cwdbbwHBreGO0Hf-7wx9hTipUABuw&s" },
        { "id": "3", "uri": "https://7elevenweb.s3.ap-southeast-1.amazonaws.com/product/051e63bc6e5d459ebdc3805d3ecd2e12.jpg" },
        { "id": "4", "uri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24keC7Syo4ttP9uafja286f6Txa33BKVuKQ&s" },
        { "id": "5", "uri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujYDNGgu4rjDixokQVPfD5-fs0ilArujIkX5BXcEMdOqTsA-a2aYZCQtsT5uJJILlk7Y&usqp=CAU" }
    ];
    return (
        <View style={{margin:10}}>
            <Text style={{ fontSize: 15,marginBottom:10,marginLeft:10}}>โปรโมชั่น</Text>
            <FlatList
                horizontal={true}
                data={benefits}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ margin: 10  }}>
                                <Image style={{ width: 150, height: 150 }} source={{ uri: item.uri }} />
                                
                            </View>
                        );
                    }
                }

            />
        </View>
    );
}
