import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [promoCode, setPromoCode] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const studyMaterials = [
    {
      id: '1',
      title: 'Advanced Math Workbook',
      description: 'A comprehensive guide to mastering algebraic formulas.',
      price: 4.99,
      thumbnail: 'https://via.placeholder.com/100',
    },
    {
      id: '2',
      title: 'Physics Practice Set',
      description: 'Contains 100+ practice questions for physics.',
      price: 3.99,
      thumbnail: 'https://via.placeholder.com/100',
    },
    {
      id: '3',
      title: 'Essay Writing Guide',
      description: 'Learn key essay writing strategies to improve your scores.',
      price: 2.99,
      thumbnail: 'https://via.placeholder.com/100',
    },
  ];

  const handleMaterialSelect = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return selectedMaterials
      .reduce((total, id) => {
        const material = studyMaterials.find((item) => item.id === id);
        return total + (material ? material.price : 0);
      }, 0)
      .toFixed(2);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{'< Back'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Purchase Additional Study Materials</Text>
        <Text style={styles.subtitle}>
          Enhance your preparation with premium study resources.
        </Text>
      </View>

      {/* Featured Study Materials */}
      <Text style={styles.sectionHeader}>Top Study Materials</Text>
      <FlatList
        data={studyMaterials}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.materialCard}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.materialTitle}>{item.title}</Text>
            <Text style={styles.materialDescription}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity
              style={styles.purchaseButton}
              onPress={() => handleMaterialSelect(item.id)}
            >
              <Text style={styles.purchaseButtonText}>
                {selectedMaterials.includes(item.id) ? 'Selected' : 'Purchase'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Payment Options */}
      <Text style={styles.sectionHeader}>Payment Options</Text>
      <View style={styles.paymentOptions}>
        <Text style={styles.paymentOption}>Credit/Debit Card</Text>
        <Text style={styles.paymentOption}>UPI/Wallet</Text>
        <TextInput
          style={styles.promoInput}
          placeholder="Have a discount code?"
          value={promoCode}
          onChangeText={setPromoCode}
        />
      </View>

      {/* Total Cost Summary */}
      <View style={styles.footer}>
        <Text style={styles.total}>
          Total: ${calculateTotal()} ({selectedMaterials.length} items)
        </Text>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.terms}>View Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20 },
  header: { marginBottom: 20 },
  backButton: { fontSize: 16, color: '#007bff' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  subtitle: { fontSize: 16, color: '#6c757d' },
  sectionHeader: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  materialCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginRight: 15,
    width: 200,
  },
  thumbnail: { width: '100%', height: 100, borderRadius: 5 },
  materialTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  materialDescription: { fontSize: 14, color: '#6c757d' },
  price: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  purchaseButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  purchaseButtonText: { color: '#fff', fontWeight: 'bold' },
  paymentOptions: { marginVertical: 20 },
  paymentOption: { fontSize: 16, marginBottom: 10 },
  promoInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  footer: { marginTop: 20 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  terms: { fontSize: 14, color: '#6c757d', marginTop: 10, textAlign: 'center' },
});
