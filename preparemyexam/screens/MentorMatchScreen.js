import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const mentors = [
  {
    id: '1',
    name: 'John Doe',
    expertise: 'Software Engineering, Career Guidance',
    rating: 4.5,
    availability: 'Available Now',
    bio: '10+ years of experience in tech startups. Passionate about guiding young developers.',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Jane Smith',
    expertise: 'Business Strategy, Marketing',
    rating: 4.7,
    availability: 'Responds within 24 hours',
    bio: 'Marketing expert with a knack for strategic growth. Ready to mentor aspiring entrepreneurs.',
    avatar: 'https://via.placeholder.com/150',
  },
  // Add more mentors as needed
];

export default function MentorMatchScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Find a Mentor</Text>
        <Text style={styles.subtitle}>Connect with experienced professionals for guidance.</Text>
      </View>

      {/* Search and Filter Section */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Search for mentors by name, skills, or expertise"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.filterSortContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="filter-list" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortButton}>
            <Ionicons name="swap-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Mentor List Section */}
      <FlatList
        data={mentors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.mentorCard}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.mentorInfo}>
              <Text style={styles.mentorName}>{item.name}</Text>
              <Text style={styles.mentorExpertise}>{item.expertise}</Text>
              <Text style={styles.mentorRating}>Rating: {item.rating}/5</Text>
              <Text style={styles.mentorAvailability}>{item.availability}</Text>
              <Text style={styles.mentorBio}>{item.bio}</Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.connectButton}>
                  <Text style={styles.buttonText}>Connect Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileButton}>
                  <Text style={styles.buttonText}>View Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
  },
  filterSortContainer: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  filterButton: {
    marginRight: 8,
  },
  mentorCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    elevation: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  mentorInfo: {
    flex: 1,
  },
  mentorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mentorExpertise: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  mentorRating: {
    fontSize: 14,
    color: 'goldenrod',
    marginTop: 4,
  },
  mentorAvailability: {
    fontSize: 14,
    color: 'green',
    marginTop: 4,
  },
  mentorBio: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  connectButton: {
    backgroundColor: '#4caf50',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  profileButton: {
    backgroundColor: '#2196f3',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
