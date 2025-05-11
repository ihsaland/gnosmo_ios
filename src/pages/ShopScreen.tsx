import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Shop: undefined;
  Cart: undefined;
  ProductDetail: { id: string };
  Contact: undefined;
  FAQ: undefined;
  ShippingReturns: undefined;
  Privacy: undefined;
  Terms: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Shop'>;

// Product data with local images
const products = [
  {
    id: '1',
    name: 'Essential T-Shirt with Logo',
    price: 39.99,
    image: require('../assets/images/t_shirt2_white.png'),
  },
  {
    id: '2',
    name: 'Premium Hoodie',
    price: 79.99,
    image: require('../assets/images/hoodie9_navy.png'),
  },
  {
    id: '3',
    name: 'Essential T-Shirt',
    price: 39.99,
    image: require('../assets/images/t_shirt4_white.png'),
  },
  {
    id: '4',
    name: 'Premium Hoodie with Logo',
    price: 79.99,
    image: require('../assets/images/hoodie7_black.png'),
  },
];

const ShopScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const renderProduct = ({ item }: { item: typeof products[0] }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={item.image} 
          style={styles.productImage} 
          resizeMode="contain"
        />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  productList: {
    padding: 0,
    paddingTop: 20,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  productPrice: {
    fontSize: 15,
    color: '#007AFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ShopScreen; 