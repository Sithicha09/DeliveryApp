import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Part8activity(props) {
    return (
        <View style={{flex: 1,marginBottom:40}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold',marginLeft: 10,marginTop: 10 }}>เกมและกิจกรรม</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://7elevenweb.s3.ap-southeast-1.amazonaws.com/page/2634a3e1df0341048f576c9275aa23a1.jpg' }}
                            style={{ width: 350, height: 180, borderRadius: 10 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://www.cpbrandsite.com/contents/news/sf5rxwibbctuvjfu5ycgejw9inyowzehjmuqidph.png' }}
                            style={{ width: 350, height: 180, borderRadius: 10 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://bertram1958.com/wp-content/uploads/2022/12/online-Siangpure-711.png' }}
                            style={{ width: 350, height: 180, borderRadius: 10 }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
