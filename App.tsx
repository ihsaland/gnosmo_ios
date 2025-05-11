import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import BottomTabNavigator from './src/components/BottomTabNavigator';
import ProductDetailScreen from './src/pages/ProductDetailScreen';
import FAQScreen from './src/pages/FAQScreen';
import ShippingReturnsScreen from './src/pages/ShippingReturnsScreen';
import PrivacyScreen from './src/pages/PrivacyScreen';
import TermsScreen from './src/pages/TermsScreen';
import { RootStackParamList } from './src/types/navigation';
import { CartProvider } from './src/context/CartContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fff',
                height: 120,
                borderBottomWidth: 1,
                borderBottomColor: '#f0f0f0',
              },
              headerTintColor: '#007AFF',
              headerTitleStyle: {
                fontSize: 28,
                fontWeight: 'bold',
                color: '#000',
              },
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen
              name="MainTabs"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
              options={({ route }) => ({
                title: 'Product Details',
                headerBackTitle: 'Back',
              })}
            />
            <Stack.Screen
              name="FAQ"
              component={FAQScreen}
              options={{
                title: 'FAQ',
                headerBackTitle: 'Back',
              }}
            />
            <Stack.Screen
              name="ShippingReturns"
              component={ShippingReturnsScreen}
              options={{
                title: 'Shipping & Returns',
                headerBackTitle: 'Back',
              }}
            />
            <Stack.Screen
              name="Privacy"
              component={PrivacyScreen}
              options={{
                title: 'Privacy Policy',
                headerBackTitle: 'Back',
              }}
            />
            <Stack.Screen
              name="Terms"
              component={TermsScreen}
              options={{
                title: 'Terms & Conditions',
                headerBackTitle: 'Back',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </CartProvider>
    </SafeAreaProvider>
  );
}
