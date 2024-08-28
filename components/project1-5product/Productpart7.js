import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'โปรโมชั่น', image: require('../../assets/week3/profile-4.jpg') },
  { id: '2', title: 'แสตมป์จัดหนัก', image: require('../../assets/week3/profile-4.jpg') },
  { id: '3', title: 'เครื่องดื่ม', image: require('../../assets/week3/profile-4.jpg') },
  
];

export default function Productpart6() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.iconContainer}>
      <Image source={item.image} style={styles.iconImage} />
      <Text style={styles.iconText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.Text1}>หมวดหมู่สินค้า</Text>
      <FlatList
      horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    // marginLeft:40,
    marginBottom:10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  iconImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
    borderRadius:80/2,
    marginLeft:40
  },
  iconText: {
    fontSize: 14,
    textAlign: 'center',
    marginLeft:40
  },
  Text1: {
    fontSize: 20,
    marginLeft:20
  },
});
