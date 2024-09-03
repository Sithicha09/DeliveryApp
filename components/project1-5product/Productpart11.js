import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const DATA = [
    {
        id: '1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdspYJ2mVar4QAnitpU0AXZLjmlZIpvHp2fAumiOKoEBMKqY9eNiW31aonTDQ948G25Z8&usqp=CAU',
        description: 'อาหารเส้นบุกปรุงรสหน่ำเลี๊ยบ รสเผ็ด 18ก.',
        price: '10 บาท',
    },
    {
        id: '2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdspYJ2mVar4QAnitpU0AXZLjmlZIpvHp2fAumiOKoEBMKqY9eNiW31aonTDQ948G25Z8&usqp=CAU',
        description: 'อาหารเส้นบุกปรุงรสหน่ำเลี๊ยบ รสเผ็ด 18ก.',
        price: '10 บาท',
    },
    {
        id: '3',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdspYJ2mVar4QAnitpU0AXZLjmlZIpvHp2fAumiOKoEBMKqY9eNiW31aonTDQ948G25Z8&usqp=CAU',
        description: 'อาหารเส้นบุกปรุงรสหน่ำเลี๊ยบ รสเผ็ด 18ก.',
        price: '10 บาท',
    },
];

const renderItem = ({ item }) => (

    <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.textContainer}>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </View>
    </View>

);

export default function Productpart11() {
    return (
        <View>
            <Text>wfeef</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 10,
    },
    card: {
        width: 400,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: 'row',
    },
    productImage: {
        width: 130,
        height: 130,
        borderRadius: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
    },
    productPrice: {
        fontSize: 18,
        color: '#00a800',
        fontWeight: 'bold',
        marginTop: 5,
    },
});
