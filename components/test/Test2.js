import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>หน้าหลัก</Text>
    </View>
  );
}

function CouponsScreen({ navigation }) {
  const [activeTab, setActiveTab] = React.useState('สมาชิก');

  return (
    <View style={styles.container}>
      <View style={styles.topTabContainer}>
        <Button
          title="เฉพาะสมาชิก"
          color={activeTab === 'สมาชิก' ? 'blue' : 'gray'}
          onPress={() => setActiveTab('สมาชิก')}
        />
        <Button
          title="คูปองอื่นๆ"
          color={activeTab === 'คูปอง' ? 'green' : 'gray'}
          onPress={() => setActiveTab('คูปอง')}
        />
      </View>
      {activeTab === 'สมาชิก' ? (
        <View style={styles.contentContainer}>
          <Text>ยังไม่มีคูปอง</Text>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <Text>คูปองอื่นๆ ที่มี</Text>
        </View>
      )}
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ตั้งค่า</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CouponsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="คูปองของฉัน" component={CouponsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="หน้าหลัก" component={HomeScreen} />
        <Tab.Screen name="คูปองของฉัน" component={CouponsStackScreen} />
        <Tab.Screen name="ตั้งค่า" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  topTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
