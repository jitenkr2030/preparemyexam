import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeDashboard() {
  const examCategories = ['Math', 'Science', 'English', 'History', 'Geography'];
  const notifications = [
    'Your next exam is in 3 days! Stay prepared.',
    'New practice tests are available for Physics.',
    'Check out our latest tips for cracking the Chemistry exam.',
  ];
  const recommendedMaterial = [
    { title: 'Advanced Math Problems', subject: 'Math', image: { uri: 'https://example.com/math.png' } },
{ title: 'History Study Guide', subject: 'History', image: { uri: 'https://example.com/history.png' } },
{ title: 'Science Concepts Review', subject: 'Science', image: { uri: 'https://example.com/science.png' } },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to PrepareMyExam</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <MaterialIcons name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Exam Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exam Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {examCategories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Notifications</Text>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationCard}>
            <Text style={styles.notificationText}>{notification}</Text>
          </View>
        ))}
      </View>

      {/* Recommended Material Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended Study Material</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendedMaterial.map((material, index) => (
            <View key={index} style={styles.materialCard}>
              <Image source={material.image} style={styles.materialImage} />
              <Text style={styles.materialTitle}>{material.title}</Text>
              <Text style={styles.materialSubject}>{material.subject}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Start Study Session</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationIcon: {
    backgroundColor: '#1976D2',
    padding: 10,
    borderRadius: 50,
  },
  section: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  categoryCard: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
  materialCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    elevation: 3,
    width: 200,
    alignItems: 'center',
  },
  materialImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  materialSubject: {
    fontSize: 14,
    color: '#777',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
