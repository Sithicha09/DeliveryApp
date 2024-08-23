import React from 'react';
import { ScrollView,  Text,  View } from 'react-native';
import Test1 from '../../components/test/Test1';



export default function Testpage1() {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Test1/>
                
               
                    
            </View>
        </ScrollView>
    );
}