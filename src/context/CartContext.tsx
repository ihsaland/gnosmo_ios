import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

type Size = 'S' | 'M' | 'L' | 'XL';
type Color = 'Black' | 'Gray' | 'Navy' | 'White';

type CartItem = {
  id: string;
  name: string;
  price: number;
  selectedSize: Size;
  selectedColor: Color;
  quantity: number;
  images: Record<Color, any> | any;
  isHoodie?: boolean;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem, quantity: number) => void;
  removeItem: (item: CartItem) => void;
  updateQuantity: (item: CartItem, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem, quantity: number) => {
    setItems(currentItems => {
      // Check if item with same ID, size, and color already exists
      const existingItemIndex = currentItems.findIndex(
        existingItem => 
          existingItem.id === item.id && 
          existingItem.selectedSize === item.selectedSize &&
          existingItem.selectedColor === item.selectedColor
      );

      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item if it doesn't exist
        return [...currentItems, { ...item, quantity }];
      }
    });
  };

  const removeItem = (item: CartItem) => {
    setItems(currentItems => 
      currentItems.filter(
        existingItem => 
          !(existingItem.id === item.id && 
            existingItem.selectedSize === item.selectedSize &&
            existingItem.selectedColor === item.selectedColor)
      )
    );
  };

  const updateQuantity = (item: CartItem, quantity: number) => {
    if (quantity < 1) {
      Alert.alert('Error', 'Quantity must be at least 1');
      return;
    }
    
    setItems(currentItems => 
      currentItems.map(existingItem => 
        (existingItem.id === item.id && 
         existingItem.selectedSize === item.selectedSize &&
         existingItem.selectedColor === item.selectedColor)
          ? { ...existingItem, quantity }
          : existingItem
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 