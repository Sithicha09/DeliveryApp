import React from 'react';
import { ScrollView,  Text,  View } from 'react-native';
import Productpart1 from '../../components/project1-5product/Productpart';
import Productpart2 from '../../components/project1-5product/Productpart2';
import Productpart3 from '../../components/project1-5product/Productpart3';
import Productpart4 from '../../components/project1-5product/Productpart4';
import Productpart5 from '../../components/project1-5product/Productpart5';
import Productpart6 from '../../components/project1-5product/Productpart6';
import Productpart7 from '../../components/project1-5product/Productpart7';



export default function Productpage() {
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={{ flex: 1 }}>
                <Productpart1/>
                <Productpart2/>
                <Productpart3/>
                <Productpart4/>
                <Productpart5/>
                <Productpart6/>
                <Productpart7/>
                

                    
            </View>
        </ScrollView>
    );
}