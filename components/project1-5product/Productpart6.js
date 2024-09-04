import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'โปรโมชั่น', image: 'https://st2.depositphotos.com/33945136/42058/v/450/depositphotos_420589946-stock-illustration-promotion-icon-modern-flat-style.jpg' },
  { id: '2', title: 'แสตมป์จัดหนัก', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETg8ywNRDCAVbN1N4G1arUXS1gZWZCoYF9Q&s' },
  { id: '3', title: 'เครื่องดื่ม', image: 'https://cdn.icon-icons.com/icons2/1574/PNG/512/3558091-beverage-drink-juice-refreshment-soft_107822.png' },
  { id: '4', title: 'สินค้าพรีเมียม', image: 'https://png.pngtree.com/png-vector/20230610/ourmid/pngtree-100-premium-product-guarantee-tag-vector-editable-png-image_7125863.png' },
  { id: '5', title: 'สนับสนุน SME', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVp5jxHcgcgtqLJ6Aq8ASAOty9HhoYyDkJw&s' },
  { id: '6', title: 'ทรูมันนี่ ลดแรง', image: 'https://play-lh.googleusercontent.com/6I2IYbIg4rhGUgs0UxP_5q6wmJmlBjBrlQ9f0_FAN94yOzwmrtEteifCdPPd1-chY_NX' },
  { id: '7', title: 'โปรเฉพาะสมาชิก', image: 'https://www.truemoney.com/wp-content/uploads/2021/06/truemoneywallet-7eleven-promotion-logo_ALLmember.png' },
  { id: '8', title: 'สินค้านำสําหรับคุณ', image: 'https://png.pngtree.com/png-vector/20230407/ourlarge/pngtree-suggestions-line-icon-vector-png-image_6692157.png' },
];

export default function Productpart6() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.iconContainer}>
      <Image source={{ uri: item.image }} style={styles.iconImage} />
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
    marginBottom: 10,
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
    borderRadius: 80 / 2,
  },
  iconText: {
    fontSize: 14,
    textAlign: 'center',
  },
  Text1: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
});
