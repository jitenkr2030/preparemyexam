import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const leaderboardData = [
  { id: 1, username: 'John Doe', rank: 1, studyHours: '50h 30m', level: 'Gold', avatar: 'https://example.com/avatar1.jpg' },
  { id: 2, username: 'Jane Smith', rank: 2, studyHours: '45h 10m', level: 'Silver', avatar: 'https://example.com/avatar2.jpg' },
  { id: 3, username: 'Alice Brown', rank: 3, studyHours: '40h 5m', level: 'Bronze', avatar: 'https://example.com/avatar3.jpg' },
  { id: 4, username: 'Bob Martin', rank: 4, studyHours: '30h 20m', level: 'Silver', avatar: 'https://example.com/avatar4.jpg' },
  { id: 5, username: 'Charlie Clark', rank: 5, studyHours: '25h 45m', level: 'Gold', avatar: 'https://example.com/avatar5.jpg' },
];

const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.subtitle}>Top Performers & Achievements</Text>
      </View>

      {/* Main Content Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>Your Rank: <Text style={styles.highlight}>#5</Text></Text>
        </View>

        {/* Top 10 Users Section */}
        <View style={styles.topUsers}>
          {leaderboardData.map((user, index) => (
            <View key={user.id} style={[styles.userRow, index < 3 && styles.topRank]}>
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
              <Text style={styles.username}>{user.username}</Text>
              <Text style={styles.studyStats}>{user.studyHours}</Text>
              <View style={styles.levelBadge}>
                <Text style={styles.levelText}>{user.level}</Text>
              </View>
              <Text style={[styles.rankPosition, user.rank === 1 ? styles.gold : user.rank === 2 ? styles.silver : styles.bronze]}>
                {user.rank === 1 ? '1st' : user.rank === 2 ? '2nd' : '3rd'}
              </Text>
            </View>
          ))}
        </View>

        {/* Categories Section */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>This Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>This Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>All-Time</Text>
          </TouchableOpacity>
        </View>

        {/* Achievement Display */}
        <View style={styles.achievements}>
          <Text style={styles.sectionTitle}>Top Achievements</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badge}>100 Study Hours</Text>
            <Text style={styles.badge}>50 Challenges Completed</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>View Your Achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fab}>
          <Ionicons name="flag" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  content: {
    padding: 15,
  },
  rankContainer: {
    marginBottom: 20,
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  highlight: {
    color: '#ffbb33',
  },
  topUsers: {
    marginBottom: 20,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  topRank: {
    backgroundColor: '#eaeaea',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  studyStats: {
    fontSize: 14,
    color: '#555',
  },
  levelBadge: {
    backgroundColor: '#ffcc00',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 10,
  },
  levelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  rankPosition: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gold: {
    color: 'gold',
  },
  silver: {
    color: 'silver',
  },
  bronze: {
    color: '#cd7f32',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  achievements: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  badgeContainer: {
    marginTop: 10,
  },
  badge: {
    backgroundColor: '#ffcc00',
    padding: 10,
    margin: 5,
    borderRadius: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  footerButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#ffbb33',
    borderRadius: 30,
    marginRight: 20,
  },
  footerButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LeaderboardScreen;
