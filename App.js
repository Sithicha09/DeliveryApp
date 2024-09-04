import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './screens/project1/Homepage';
import Memberpage from './screens/project1/Memberpage';
import Notipage from './screens/project1/Notipage';
import Couponpage from './screens/project1/Couponpage';
import Testpage1 from './screens/test/Testpage1';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';
import HomeStack from './navigations/HomeStack';
import Productpage from './screens/project1/Productpage';
import RootStack from './navigations/RootStack';

export default function App() {
  return (
    // <Homepage />
    // <Memberpage/>
    // <Notipage/>
    // <Couponpage/>
    // <Productpage/>

    //navigation
    <NavigationContainer>
      {/* <HomeStack /> */}
      {/* <BottomTab /> */}
      <RootStack />
    </NavigationContainer>


    //test
    // <Testpage1/>
    


  );
}
