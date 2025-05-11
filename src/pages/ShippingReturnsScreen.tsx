import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ShippingReturnsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Shipping & Returns</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Information</Text>
          <Text style={styles.text}>
            We offer various shipping options to meet your needs:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Standard Shipping (3-5 business days)</Text>
            <Text style={styles.listItem}>• Express Shipping (1-2 business days)</Text>
            <Text style={styles.listItem}>• International Shipping (5-10 business days)</Text>
          </View>
          <Text style={styles.text}>
            Shipping costs are calculated based on your location and the weight of your order.
            You can view the exact shipping cost during checkout.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Returns Policy</Text>
          <Text style={styles.text}>
            We want you to be completely satisfied with your purchase. Our return policy is as follows:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• 30-day return window from delivery date</Text>
            <Text style={styles.listItem}>• Items must be unused and in original packaging</Text>
            <Text style={styles.listItem}>• Original receipt or order confirmation required</Text>
          </View>
          <Text style={styles.text}>
            To initiate a return, please contact our customer service team with your order number
            and reason for return. We will provide you with a return shipping label and instructions.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Refunds</Text>
          <Text style={styles.text}>
            Once we receive your returned item and verify its condition, we will process your refund
            within 5-7 business days. The refund will be issued to your original payment method.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions about shipping or returns, please don't hesitate to contact us:
          </Text>
          <Text style={styles.contactInfo}>Email: support@gnosmo.com</Text>
          <Text style={styles.contactInfo}>Phone: (555) 123-4567</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
  },
  list: {
    marginBottom: 15,
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});

export default ShippingReturnsScreen; 