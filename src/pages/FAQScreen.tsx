import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'What is Gnosmo?',
    answer: 'Gnosmo is an e-commerce platform that offers a wide range of products. We focus on providing high-quality items with excellent customer service.',
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order by logging into your account and visiting the "My Orders" section. You will receive tracking information via email once your order ships.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of delivery. Items must be unused and in their original packaging. Please visit our Shipping & Returns page for more details.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can view shipping options during checkout.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.',
  },
];

const FAQScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        
        {faqItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.faqItem}
            onPress={() => toggleExpand(index)}
          >
            <View style={styles.questionContainer}>
              <Text style={styles.question}>{item.question}</Text>
              <Text style={styles.expandIcon}>
                {expandedIndex === index ? '−' : '+'}
              </Text>
            </View>
            {expandedIndex === index && (
              <Text style={styles.answer}>{item.answer}</Text>
            )}
          </TouchableOpacity>
        ))}

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Still have questions?</Text>
          <Text style={styles.contactText}>
            Feel free to contact our customer support team. We're here to help!
          </Text>
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
    paddingTop: 120,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  faqItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 10,
  },
  expandIcon: {
    fontSize: 24,
    color: '#007AFF',
  },
  answer: {
    fontSize: 16,
    color: '#666',
    padding: 15,
    paddingTop: 0,
    lineHeight: 24,
  },
  contactSection: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});

export default FAQScreen; 