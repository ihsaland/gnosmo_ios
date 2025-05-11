import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCart } from '../context/CartContext';

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

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetail'>;

type Size = 'S' | 'M' | 'L' | 'XL';
type Color = 'Black' | 'Gray' | 'Navy' | 'White';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: Record<Color, any> | any; // Using any for require() return type
  sizes: Size[];
  colors?: Color[];
  isHoodie?: boolean;
  selectedSize?: Size;
  selectedColor?: Color;
};

// Product data with local images
const products: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'Essential T-Shirt with Logo',
    price: 39.99,
    description: 'A comfortable and stylish t-shirt made from 100% cotton. Perfect for everyday wear.',
    images: {
      'Black': require('../assets/images/t_shirt2_black.png'),
      'Gray': require('../assets/images/t_shirt2_gray.png'),
      'White': require('../assets/images/t_shirt2_white.png'),
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'White'],
  },
  '2': {
    id: '2',
    name: 'Premium Hoodie',
    price: 79.99,
    description: 'A high-quality hoodie with a modern design. Features a soft inner lining and durable outer material.',
    images: {
      'Black': require('../assets/images/hoodie9_black.png'),
      'Gray': require('../assets/images/hoodie9_gray.png'),
      'Navy': require('../assets/images/hoodie9_navy.png'),
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    isHoodie: true,
  },
  '3': {
    id: '3',
    name: 'Essential T-Shirt',
    price: 39.99,
    description: 'A unique t-shirt with an artistic design. Made from premium materials for maximum comfort.',
    images: {
      'Black': require('../assets/images/t_shirt4_black.png'),
      'Gray': require('../assets/images/t_shirt4_gray.png'),
      'White': require('../assets/images/t_shirt4_white.png'),
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'White'],
  },
  '4': {
    id: '4',
    name: 'Premium Hoodie with Logo',
    price: 79.99,
    description: 'A trendy hoodie perfect for urban style. Features a modern cut and comfortable fit.',
    images: {
      'Black': require('../assets/images/hoodie7_black.png'),
      'Gray': require('../assets/images/hoodie7_gray.png'),
      'Navy': require('../assets/images/hoodie7_navy.png'),
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    isHoodie: true,
  },
};

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  const product = products[route.params.id];
  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  // Set initial color if product has colors
  React.useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product.colors]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
    };
    addItem(cartItem, quantity);
    navigation.navigate('Cart');
  };

  const getProductImage = () => {
    if (selectedColor) {
      return product.images[selectedColor];
    }
    return product.images;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={getProductImage()} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        
        <Text style={styles.description}>{product.description}</Text>
        
        <View style={styles.colorContainer}>
          <Text style={styles.colorLabel}>Color:</Text>
          <View style={styles.colorOptions}>
            {product.colors?.map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorButton,
                  selectedColor === color && styles.colorButtonSelected,
                  { backgroundColor: color.toLowerCase() },
                ]}
                onPress={() => setSelectedColor(color)}
              >
                {selectedColor === color && (
                  <View style={styles.colorCheckmark}>
                    <Text style={styles.colorButtonText}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeLabel}>Size:</Text>
          <View style={styles.sizeOptions}>
            {product.sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.sizeButtonSelected,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text 
                  style={[
                    styles.sizeButtonText,
                    selectedSize === size && styles.sizeButtonTextSelected,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantity:</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={[
            styles.addToCartButton,
            (!selectedSize || (product.isHoodie && !selectedColor)) && styles.addToCartButtonDisabled,
          ]} 
          onPress={handleAddToCart}
          disabled={!selectedSize || (product.isHoodie && !selectedColor)}
        >
          <Text style={styles.addToCartButtonText}>
            {!selectedSize ? 'Select a Size' : 
             product.isHoodie && !selectedColor ? 'Select a Color' : 
             'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    paddingTop: 120,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#007AFF',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  colorContainer: {
    marginBottom: 20,
  },
  colorLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorButtonSelected: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  colorCheckmark: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sizeContainer: {
    marginBottom: 20,
  },
  sizeLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  sizeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  sizeButtonSelected: {
    backgroundColor: '#007AFF',
  },
  sizeButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  sizeButtonTextSelected: {
    color: '#fff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#007AFF',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartButtonDisabled: {
    backgroundColor: '#ccc',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductDetailScreen; 