import React from 'react';
import { ScrollView,  Text,  View } from 'react-native';
import Part1 from '../../components/project1/Part1';
import Part2 from '../../components/project1/Part2';
import Part3 from '../../components/project1/Part3Icon';
import Part4promotion from '../../components/project1/Part4promotion';
import Part5Icon2 from '../../components/project1/Part5Icon2';
import Part6recommendALLm from '../../components/project1/Part6recommendALLm';
import Part7otherpromotion from '../../components/project1/Part7otherpromotion';
import Part8activity from '../../components/project1/Part8activity';



export default function Homepage() {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
               <Part1 />
               <Part2 />
               <Part3 />
               <Part4promotion />
               <Part5Icon2 />
               <Part6recommendALLm />
               <Part7otherpromotion />
               <Part8activity />
                    
            </View>
        </ScrollView>
    );
}