import React from 'react';
import { ScrollView,  Text,  View } from 'react-native';
import Notipart1 from '../../components/project1-3noti/Notipart1';
import Notipart2 from '../../components/project1-3noti/Notipart2';

export default function Notipage() {
    return (
        <ScrollView style={{backgroundColor:'#e6e6e6'}}>
            <View style={{ flex: 1 }}>
                <Notipart1/>
                <Notipart2/>

                    
            </View>
        </ScrollView>
    );
}