import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    type: 'Priority',
    title: 'Exam Registration Deadline Approaching',
    message: 'You have 2 days remaining to register for the XYZ exam.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    type: 'Recent',
    title: 'Your mock test results are now available.',
    message: 'Check your results in the app.',
    time: '1 day ago',
    read: true,
  },
  {
    id: '3',
    type: 'Important',
    title: 'New study materials uploaded.',
    message: 'Access new materials in your library.',
    time: '3 hours ago',
    read: false,
  },
];

export default function NotificationsScreen() {
  const [filter, setFilter] = useState('All Notifications');
  const [search, setSearch] = useState('');
  const [data, setData] = useState(notifications);

  const handleClearAll = () => {
    Alert.alert('Clear All Notifications', 'Are you sure you want to clear all notifications?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Yes', onPress: () => setData([]) },
    ]);
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity style={[styles.notificationCard, !item.read && styles.unreadNotification]}>
      <View style={styles.notificationContent}>
        <Ionicons name="notifications" size={24} color={item.read ? '#ccc' : '#007BFF'} />
        <View style={styles.textContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.timestamp}>{item.time}</Text>
        </View>
      </View>
      {!item.read && <TouchableOpacity onPress={() => markAsRead(item.id)}><Text style={styles.actionButton}>Mark as Read</Text></TouchableOpacity>}
    </TouchableOpacity>
  );

  const markAsRead = (id) => {
    setData(data.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Notifications</Text>
        <Text style={styles.subtitle}>View all your reminders, updates, and alerts.</Text>
      </View>

      <View style={styles.filterSection}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search notifications..."
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter: {filter}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.clearAllButton} onPress={handleClearAll}>
        <Text style={styles.clearAllText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { padding: 16, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#DDD' },
  backButton: { position: 'absolute', left: 16, top: 20 },
  screenTitle: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 4 },
  filterSection: { flexDirection: 'row', padding: 16, alignItems: 'center', backgroundColor: '#FFF' },
  searchBar: { flex: 1, backgroundColor: '#EEE', padding: 8, borderRadius: 8, marginRight: 8 },
  filterText: { color: '#007BFF', fontWeight: 'bold' },
  listContainer: { padding: 16 },
  notificationCard: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#FFF', marginBottom: 8, borderRadius: 8, elevation: 1 },
  unreadNotification: { backgroundColor: '#E3F2FD' },
  notificationContent: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  textContent: { marginLeft: 8 },
  title: { fontSize: 16, fontWeight: 'bold' },
  message: { fontSize: 14, color: '#666' },
  timestamp: { fontSize: 12, color: '#AAA' },
  actionButton: { fontSize: 14, color: '#007BFF' },
  clearAllButton: { padding: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#DDD' },
  clearAllText: { color: '#FF0000', fontWeight: 'bold' },
});
