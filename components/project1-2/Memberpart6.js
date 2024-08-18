import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Memberpart6() {
    const benefits = [
        { "id": "1", "uri": "https://f.ptcdn.info/678/062/000/pniu68iin98LMLBWBdu-o.jpg" },
        { "id": "2", "uri": "https://pbs.twimg.com/media/FTIAQDJagAACAp9.jpg" },
        { "id": "3", "uri": "https://promotions.co.th/wp-content/uploads/2020/05/%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9-ALL-member-%E0%B9%81%E0%B8%A5%E0%B8%81%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B9%80%E0%B8%8B%E0%B9%80%E0%B8%A7%E0%B9%88%E0%B8%99-Winnie-the-Pooh-%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81.jpg" },
        { "id": "4", "uri": "https://pbs.twimg.com/media/FYv7HbnaMAEB2wf.jpg" },
        { "id": "5", "uri": "https://f.ptcdn.info/111/083/000/s86z7d1k6mqS7jh6m0Yci-o.jpg" }
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
