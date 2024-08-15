import React from 'react';
import { ScrollView,  Text,  View } from 'react-native';
import Memberpart1 from '../../components/project1-2/memberpart1';
import Memberpart2 from '../../components/project1-2/Memberpart2';
import Memberpart3 from '../../components/project1-2/Memberpart3';
import Memberpart4 from '../../components/project1-2/Memberpart4';
import Memberpart5 from '../../components/project1-2/Memberpart5';
import Memberpart6 from '../../components/project1-2/Memberpart6';




export default function Memberpage() {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
            
               <Memberpart1/>
               {/* <Memberpart2 /> */}
               <Memberpart3/>
               <Memberpart4/>
               <Memberpart5/>
               <Memberpart6/>
                    
            </View>
        </ScrollView>
    );
}