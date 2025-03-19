import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ProgressBarAndroid, StyleSheet, Image, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const achievementsData = [
  { id: '1', name: 'Study 50 Hours', unlocked: true, icon: 'https://example.com/icon1.png' },
  { id: '2', name: 'Complete 5 Mock Tests', unlocked: true, icon: 'https://example.com/icon2.png' },
  { id: '3', name: 'Top 10 in Leaderboard', unlocked: false, icon: 'https://example.com/icon3.png' },
  // Add more achievements as needed
];

export default function AchievementsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [progress, setProgress] = useState(7); // Example progress

  const handleBadgePress = (badge) => {
    setSelectedBadge(badge);
    setModalVisible(true);
  };

  const handleClaimReward = (reward) => {
    console.log(`Reward ${reward} claimed`);
    // Reward claiming logic
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Achievements</Text>
        <Text style={styles.subtitle}>5/10 Achievements Unlocked</Text>
      </View>

      {/* Achievements Overview */}
      <View style={styles.overview}>
        <Text style={styles.text}>Achievements Unlocked: {progress} of 20</Text>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress / 20} />
      </View>

      {/* Badge Display */}
      <View style={styles.badgeContainer}>
        <FlatList
          data={achievementsData}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleBadgePress(item)} style={styles.badge}>
              <Image source={{ uri: item.icon }} style={styles.badgeIcon} />
              <Text style={styles.badgeText}>{item.name}</Text>
              {item.unlocked ? null : (
                <Ionicons name="lock-closed" size={24} color="gray" style={styles.lockIcon} />
              )}
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Rewards Overview */}
      <View style={styles.rewards}>
        <Text style={styles.sectionTitle}>Claimable Rewards</Text>
        <View style={styles.reward}>
          <Text style={styles.rewardText}>100 XP</Text>
          <TouchableOpacity style={styles.claimButton} onPress={() => handleClaimReward('100 XP')}>
            <Text style={styles.claimButtonText}>Claim Now</Text>
          </TouchableOpacity>
        </View>
        {/* Add more rewards */}
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>View All Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerButton, styles.challengeButton]}>
          <Text style={styles.footerButtonText}>Start New Challenge</Text>
        </TouchableOpacity>
      </View>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modal}>
            <Image source={{ uri: selectedBadge.icon }} style={styles.modalIcon} />
            <Text style={styles.modalTitle}>{selectedBadge.name}</Text>
            <Text style={styles.modalDescription}>You need to complete {selectedBadge.name} to unlock this badge.</Text>
            <Button title="Start Now" onPress={() => setModalVisible(false)} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  overview: {
    marginVertical: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  badge: {
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 12,
    textAlign: 'center',
  },
  lockIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  rewards: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reward: {
    marginBottom: 16,
  },
  rewardText: {
    fontSize: 18,
  },
  claimButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  claimButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerButton: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  challengeButton: {
    backgroundColor: '#FF6347',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});
