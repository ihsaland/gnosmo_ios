import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  MainTabs: undefined;
  ProductDetail: { id: string };
  FAQ: undefined;
  ShippingReturns: undefined;
  Privacy: undefined;
  Terms: undefined;
};

export type TabParamList = {
  Home: undefined;
  Shop: undefined;
  Cart: undefined;
  Contact: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigationProp = BottomTabNavigationProp<TabParamList>;

export type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>; 