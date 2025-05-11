import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.lastUpdated}>Last Updated: May 10, 2024</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.text}>
            At Gnosmo, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our mobile application.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Information We Collect</Text>
          <Text style={styles.text}>We collect information that you provide directly to us:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Personal information (name, email, address)</Text>
            <Text style={styles.listItem}>• Payment information</Text>
            <Text style={styles.listItem}>• Order history</Text>
            <Text style={styles.listItem}>• Communication preferences</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How We Use Your Information</Text>
          <Text style={styles.text}>We use the information we collect to:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Process your orders and payments</Text>
            <Text style={styles.listItem}>• Communicate with you about your orders</Text>
            <Text style={styles.listItem}>• Send you marketing communications (with your consent)</Text>
            <Text style={styles.listItem}>• Improve our services and user experience</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Information Sharing</Text>
          <Text style={styles.text}>
            We do not sell your personal information. We may share your information with:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Service providers who assist in our operations</Text>
            <Text style={styles.listItem}>• Payment processors</Text>
            <Text style={styles.listItem}>• Shipping partners</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Rights</Text>
          <Text style={styles.text}>You have the right to:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Access your personal information</Text>
            <Text style={styles.listItem}>• Correct inaccurate information</Text>
            <Text style={styles.listItem}>• Request deletion of your information</Text>
            <Text style={styles.listItem}>• Opt-out of marketing communications</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions about this Privacy Policy, please contact us:
          </Text>
          <Text style={styles.contactInfo}>Email: privacy@gnosmo.com</Text>
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
    marginBottom: 10,
  },
  lastUpdated: {
    fontSize: 14,
    color: '#666',
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

export default PrivacyScreen; 