import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PaymentConfirmationScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Payment Confirmation</Text>
        <Text style={styles.subtitle}>Review your order before finalizing.</Text>
      </View>

      {/* Main Content Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.card}>
          <Text>1x Course Name - ₹499</Text>
          <Text>2x Subscriptions - ₹999</Text>
          <Text style={styles.totalPrice}>Total: ₹1,499</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.card}>
          <Text>Credit Card - **** 1234</Text>
          <TouchableOpacity>
            <Text style={styles.changeLink}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Billing Information</Text>
        <View style={styles.card}>
          <Text>Name: John Doe</Text>
          <Text>Address: 123 Main St, New York, NY, 10001</Text>
          <Text>Email: john.doe@example.com</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Applied Discounts</Text>
        <View style={styles.card}>
          <Text>Promo Code Applied: ₹200 off</Text>
          <Text style={styles.discountText}>You saved ₹200!</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Fees</Text>
        <View style={styles.card}>
          <Text>Tax (5%): ₹50</Text>
          <Text>Service Fee: ₹30</Text>
          <Text>Total Fees: ₹80</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Amount to Pay</Text>
        <Text style={styles.amountToPay}>Total: ₹1,499</Text>
      </View>

      {/* Call to Action Section */}
      <View style={styles.callToAction}>
        <Button title="Confirm and Pay" color="#4CAF50" onPress={() => alert('Payment initiated')} />
        <Text style={styles.securityNotice}>Your payment is secure. We use encryption to protect your personal and payment information.</Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Need help?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backText: {
    fontSize: 24,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  changeLink: {
    color: '#007BFF',
    fontSize: 16,
    marginTop: 5,
  },
  discountText: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  amountToPay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  callToAction: {
    alignItems: 'center',
    marginTop: 30,
  },
  securityNotice: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 14,
    color: '#007BFF',
    marginVertical: 5,
  },
});
