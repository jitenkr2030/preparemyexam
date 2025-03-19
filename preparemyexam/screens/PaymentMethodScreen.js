import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentMethodScreen = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Credit Card', lastFour: '1234', expiration: '11/25', isDefault: true },
    { id: 2, type: 'UPI', lastFour: 'example@upi', expiration: '', isDefault: false },
  ]);
  const [newPaymentMethod, setNewPaymentMethod] = useState('');

  const addPaymentMethod = () => {
    if (!newPaymentMethod) {
      Alert.alert('Error', 'Please enter payment details');
      return;
    }
    setPaymentMethods([...paymentMethods, { id: Date.now(), type: newPaymentMethod, lastFour: '****', expiration: '', isDefault: false }]);
    setNewPaymentMethod('');
  };

  const setDefaultPayment = (id) => {
    const updatedPaymentMethods = paymentMethods.map((method) => {
      if (method.id === id) {
        method.isDefault = true;
      } else {
        method.isDefault = false;
      }
      return method;
    });
    setPaymentMethods(updatedPaymentMethods);
  };

  const deletePaymentMethod = (id) => {
    Alert.alert('Confirm', 'Are you sure you want to remove this payment method?', [
      { text: 'Cancel' },
      { text: 'Yes, Remove', onPress: () => setPaymentMethods(paymentMethods.filter((method) => method.id !== id)) },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Payment Methods</Text>
        <Text style={styles.subtitle}>Add, update, or remove payment methods for seamless transactions.</Text>
      </View>

      {/* Payment Methods List */}
      <ScrollView style={styles.paymentList}>
        <Text style={styles.sectionTitle}>Your Payment Methods</Text>
        {paymentMethods.map((method) => (
          <View key={method.id} style={styles.paymentCard}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardType}>{method.type}</Text>
              <Text style={styles.cardNumber}>{method.lastFour}</Text>
              {method.expiration && <Text style={styles.expiration}>Expires: {method.expiration}</Text>}
              {method.isDefault && <Text style={styles.defaultLabel}>Default</Text>}
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity onPress={() => {}}>
                <Ionicons name="pencil" size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deletePaymentMethod(method.id)}>
                <Ionicons name="trash" size={20} color="red" />
              </TouchableOpacity>
              {!method.isDefault && (
                <TouchableOpacity onPress={() => setDefaultPayment(method.id)}>
                  <Text style={styles.setDefaultButton}>Set as Default</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Add New Payment Method */}
      <View style={styles.addPaymentMethod}>
        <Text style={styles.sectionTitle}>Add Payment Method</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Payment Method (e.g., Credit Card)"
          value={newPaymentMethod}
          onChangeText={setNewPaymentMethod}
        />
        <TouchableOpacity style={styles.addButton} onPress={addPaymentMethod}>
          <Text style={styles.addButtonText}>Add Payment Method</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  paymentList: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  paymentCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardInfo: {
    flex: 1,
  },
  cardType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 14,
    color: '#555',
  },
  expiration: {
    fontSize: 12,
    color: '#888',
  },
  defaultLabel: {
    fontSize: 12,
    color: 'green',
    marginTop: 8,
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  setDefaultButton: {
    fontSize: 14,
    color: '#007bff',
    marginLeft: 8,
  },
  addPaymentMethod: {
    marginTop: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 16,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PaymentMethodScreen;
