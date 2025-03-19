import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const SubscriptionScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState('Free');
  const [promoCode, setPromoCode] = useState('');

  const plans = [
    {
      name: 'Free Plan',
      description: 'Access basic features, limited content.',
      price: 'Free',
      features: ['Basic access to study material', 'Limited mock tests'],
    },
    {
      name: 'Premium Plan',
      description: 'Unlock all features including unlimited mock tests.',
      price: '$9.99/month',
      features: ['Advanced analytics', 'Unlimited study material access', 'Ad-free experience'],
    },
    {
      name: 'Pro Plan',
      description: 'Designed for power users, access to exclusive content.',
      price: '$19.99/month',
      features: ['Exclusive content', 'One-on-one mentoring', 'Priority support'],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Subscription Plans</Text>
        <Text style={styles.subtitle}>Choose a plan that suits your needs and manage your subscription settings.</Text>
      </View>

      {/* Subscription Plans */}
      <View style={styles.planSection}>
        <Text style={styles.sectionHeader}>Choose a Plan</Text>
        {plans.map((plan) => (
          <TouchableOpacity
            key={plan.name}
            style={[
              styles.planCard,
              selectedPlan === plan.name && styles.selectedPlanCard,
            ]}
            onPress={() => setSelectedPlan(plan.name)}
          >
            <Text style={styles.planName}>{plan.name}</Text>
            <Text style={styles.planDescription}>{plan.description}</Text>
            <Text style={styles.planPrice}>{plan.price}</Text>
            <View>
              {plan.features.map((feature, index) => (
                <Text key={index} style={styles.featureText}>• {feature}</Text>
              ))}
            </View>
            {selectedPlan === plan.name && <Text style={styles.activeLabel}>Active</Text>}
          </TouchableOpacity>
        ))}
      </View>

      {/* Promo Code Section */}
      <View style={styles.promoSection}>
        <Text style={styles.sectionHeader}>Have a discount code?</Text>
        <View style={styles.promoInputContainer}>
          <TextInput
            style={styles.promoInput}
            placeholder="Enter promo code"
            value={promoCode}
            onChangeText={setPromoCode}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <TouchableOpacity>
          <Text style={styles.termsText}>View Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerSection: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  planSection: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  planCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedPlanCard: {
    borderColor: '#007AFF',
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  planDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  featureText: {
    fontSize: 14,
    color: '#333',
  },
  activeLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  promoSection: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  promoInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  promoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  applyButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerSection: {
    padding: 20,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default SubscriptionScreen;
