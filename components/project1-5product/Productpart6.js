import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'โปรโมชั่น', image: require('../../assets/week3/profile-4.jpg') },
  { id: '2', title: 'แสตมป์จัดหนัก', image: require('../../assets/week3/profile-4.jpg') },
  { id: '3', title: 'เครื่องดื่ม', image: require('../../assets/week3/profile-4.jpg') },
  { id: '4', title: 'สินค้าพรีเมียม', image: require('../../assets/week3/profile-4.jpg') },
  { id: '5', title: 'สนับสนุน SME', image: require('../../assets/week3/profile-4.jpg') },
  { id: '6', title: 'ทรูมันนี่ ลดแรง', image: require('../../assets/week3/profile-4.jpg') },
  { id: '7', title: 'โปรเฉพาะสมาชิก', image: require('../../assets/week3/profile-4.jpg') },
  { id: '8', title: 'สินค้านำสําหรับคุณ', image: require('../../assets/week3/profile-4.jpg') },
  
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
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={4} // จำนวนคอลัมน์ในกริด
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    // marginLeft:20,
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
    borderRadius:80/2
  },
  iconText: {
    fontSize: 14,
    textAlign: 'center',
  },
  Text1: {
    fontSize: 20,
    marginLeft:20
  },
});
