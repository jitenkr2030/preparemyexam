import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MaterialDetailScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Material Details</Text>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="bookmark-border" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Material Overview Section */}
      <View style={styles.materialOverview}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.thumbnail}
        />
        <Text style={styles.materialTitle}>Advanced Physics Revision Notes</Text>
        <Text style={styles.materialSubtitle}>By ABC Institute, Uploaded on Dec 15, 2024</Text>
      </View>

      {/* Key Details Section */}
      <View style={styles.keyDetails}>
        <Text style={styles.detailText}>File Format: PDF, 12MB</Text>
        <Text style={styles.detailText}>Category: Physics – Mechanics</Text>
        <Text style={styles.detailText}>Tags: NEET, JEE, High School</Text>
        <Text style={styles.detailText}>Access Level: Free</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>★★★★☆ 4.5/5</Text>
          <Text style={styles.reviewCount}>(125 Reviews)</Text>
        </View>
      </View>

      {/* Actions Section */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>View Material</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.primaryButton, styles.downloadButton]}>
          <Text style={styles.buttonText}>Download Material</Text>
        </TouchableOpacity>
        <View style={styles.secondaryActions}>
          <TouchableOpacity>
            <MaterialIcons name="share" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="flag" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Material Description Section */}
      <View style={styles.description}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          Comprehensive revision notes covering the fundamentals of mechanics, 
          including Newton's laws, work-energy theorem, and rotational dynamics. 
          Ideal for NEET and JEE aspirants.
        </Text>
      </View>

      {/* Related Materials Section */}
      <View style={styles.relatedMaterials}>
        <Text style={styles.sectionTitle}>You May Also Like</Text>
        <ScrollView horizontal>
          <View style={styles.relatedCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.relatedImage}
            />
            <Text style={styles.relatedText}>Material 1</Text>
          </View>
          <View style={styles.relatedCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.relatedImage}
            />
            <Text style={styles.relatedText}>Material 2</Text>
          </View>
        </ScrollView>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <MaterialIcons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="library-books" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="category" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  iconButton: {
    padding: 5,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  materialOverview: {
    alignItems: 'center',
    padding: 20,
  },
  thumbnail: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  materialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  materialSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  keyDetails: {
    padding: 20,
  },
  detailText: {
    fontSize: 14,
    marginVertical: 5,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviewCount: {
    marginLeft: 10,
    fontSize: 12,
    color: 'gray',
  },
  actions: {
    padding: 20,
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  secondaryActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 10,
  },
  description: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  relatedMaterials: {
    padding: 20,
  },
  relatedCard: {
    width: 100,
    alignItems: 'center',
    marginRight: 10,
  },
  relatedImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  relatedText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
});
