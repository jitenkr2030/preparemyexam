import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function CommunityScreen() {
  const categories = [
    { id: '1', title: 'General Discussion', description: 'Share advice and tips!', icon: 'chatbubble-ellipses-outline' },
    { id: '2', title: 'Exam Tips', description: 'Discuss preparation strategies.', icon: 'book-outline' },
    { id: '3', title: 'Study Strategies', description: 'Effective learning methods.', icon: 'bulb-outline' },
    { id: '4', title: 'Success Stories', description: 'Inspire and be inspired.', icon: 'heart-outline' },
    { id: '5', title: 'Technical Support', description: 'Resolve app issues.', icon: 'settings-outline' },
    { id: '6', title: 'Motivation & Wellness', description: 'Stay positive and focused.', icon: 'happy-outline' },
  ];

  const activeDiscussions = [
    { id: '1', title: 'How to Stay Focused While Studying', author: 'User123', replies: 10, likes: 25 },
    { id: '2', title: 'Top 5 Apps for Note-Taking', author: 'StudyGuru', replies: 8, likes: 18 },
    { id: '3', title: 'Managing Exam Stress', author: 'CalmMind', replies: 15, likes: 30 },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Community & Support</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Search Forum..." style={styles.searchInput} />
      </View>

      {/* Forum Categories */}
      <Text style={styles.sectionTitle}>Forum Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <Ionicons name={item.icon} size={24} color="black" style={styles.categoryIcon} />
            <View>
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <Text style={styles.categoryDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Active Discussions */}
      <Text style={styles.sectionTitle}>Active Discussions</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.activeDiscussions}>
        {activeDiscussions.map((thread) => (
          <View key={thread.id} style={styles.threadCard}>
            <Text style={styles.threadTitle}>{thread.title}</Text>
            <Text style={styles.threadInfo}>By {thread.author}</Text>
            <Text style={styles.threadInfo}>{thread.replies} Replies | {thread.likes} Likes</Text>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 1,
  },
  categoryIcon: {
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 14,
    color: 'gray',
  },
  activeDiscussions: {
    flexDirection: 'row',
  },
  threadCard: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 10,
    elevation: 1,
  },
  threadTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  threadInfo: {
    fontSize: 14,
    color: 'gray',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
});
