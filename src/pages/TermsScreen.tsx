import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TermsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Terms & Conditions</Text>
        <Text style={styles.lastUpdated}>Last Updated: May 10, 2024</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
          <Text style={styles.text}>
            By accessing and using the Gnosmo mobile application, you agree to be bound by these
            Terms and Conditions. If you do not agree to these terms, please do not use the app.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Use of the App</Text>
          <Text style={styles.text}>You agree to use the app only for lawful purposes and in accordance with these terms. You shall not:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Use the app in any way that violates applicable laws</Text>
            <Text style={styles.listItem}>• Attempt to gain unauthorized access to the app</Text>
            <Text style={styles.listItem}>• Interfere with the proper functioning of the app</Text>
            <Text style={styles.listItem}>• Use the app for any fraudulent or harmful purpose</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. User Accounts</Text>
          <Text style={styles.text}>
            To use certain features of the app, you may need to create an account. You are responsible for:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Maintaining the confidentiality of your account</Text>
            <Text style={styles.listItem}>• All activities that occur under your account</Text>
            <Text style={styles.listItem}>• Providing accurate and complete information</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Orders and Payments</Text>
          <Text style={styles.text}>
            By placing an order through the app, you warrant that:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• You are authorized to make the purchase</Text>
            <Text style={styles.listItem}>• The payment information provided is accurate</Text>
            <Text style={styles.listItem}>• You will pay for the products in full</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Intellectual Property</Text>
          <Text style={styles.text}>
            The app and its contents are protected by intellectual property rights. You may not:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Copy or modify the app or its contents</Text>
            <Text style={styles.listItem}>• Use the app for commercial purposes without permission</Text>
            <Text style={styles.listItem}>• Remove any copyright or proprietary notices</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
          <Text style={styles.text}>
            Gnosmo shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages resulting from your use of the app.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Changes to Terms</Text>
          <Text style={styles.text}>
            We reserve the right to modify these terms at any time. We will notify users of any material
            changes through the app or via email.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions about these Terms & Conditions, please contact us:
          </Text>
          <Text style={styles.contactInfo}>Email: legal@gnosmo.com</Text>
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

export default TermsScreen; 