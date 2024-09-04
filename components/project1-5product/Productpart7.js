import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'ออล์ คาเฟ่', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAY1RvcPaLKqPsQ5sn_-KfNV8aZaiV1sYahg&s' },
  { id: '2', title: 'Chef Cares', image: 'https://www.chefcares.org/uploads/medias/608/mock%20up%20for%20website.png' },
  { id: '3', title: 'TRUE', image: 'https://e7.pngegg.com/pngimages/966/563/png-clipart-iphone-true-corporation-truemove-h-business-true-move-company-limited-false-electronics-company.png' },
  
];

export default function Productpart7() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.iconContainer}>
      <Image source={{ uri: item.image }} style={styles.iconImage} />
      <Text style={styles.iconText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.Text1}>แบรนด์แนะนำ</Text>
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
    marginLeft:20,
    fontWeight: 'bold',
  },
});
