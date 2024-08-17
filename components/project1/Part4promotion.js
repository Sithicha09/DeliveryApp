import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Part4promotion(props) {
    return (
        <View style={{flex: 1}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold',marginLeft: 10 }}>Promotion</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://cms.dmpcdn.com/trueyouarticle/2022/08/22/c152a1e0-21c7-11ed-b3d2-ffb09600b95d_webp_original.jpg' }}
                            style={{ width: 300, height: 170, borderRadius: 10 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://cms.dmpcdn.com/food/2022/08/26/6a4a6dc0-24fa-11ed-85d0-031ec65e1734_webp_original.jpg' }}
                            style={{ width: 300, height: 170, borderRadius: 10 }} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://cms.dmpcdn.com/trueyouarticle/2022/08/24/c11a9ba0-236c-11ed-9ef6-91c7fddcd43a_webp_1024.jpg' }}
                            style={{ width: 300, height: 170, borderRadius: 10 }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
