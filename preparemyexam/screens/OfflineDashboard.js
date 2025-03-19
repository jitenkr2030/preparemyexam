import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const offlineMaterials = [
  {
    id: '1',
    title: 'Advanced Mathematics Workbook',
    type: 'PDF',
    progress: '50% Completed',
    date: 'Downloaded on: 12 Dec 2024',
  },
  {
    id: '2',
    title: 'Physics Mock Tests',
    type: 'Practice Test',
    progress: 'Last viewed on: 21 Dec 2024',
    date: 'Downloaded on: 10 Dec 2024',
  },
  {
    id: '3',
    title: 'Essay Writing Guide',
    type: 'Video',
    progress: 'Not Started',
    date: 'Downloaded on: 08 Dec 2024',
  },
];

export default function OfflineMaterialsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpen = (title) => {
    Alert.alert('Open Material', `Opening ${title}`);
  };

  const handleDelete = (id) => {
    Alert.alert(
      'Delete Material',
      'Are you sure you want to delete this material?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log(`Deleted material with ID: ${id}`) },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.materialCard}>
      <View style={styles.materialInfo}>
        <Text style={styles.materialTitle}>{item.title}</Text>
        <Text style={styles.materialType}>{item.type}</Text>
        <Text style={styles.materialProgress}>{item.progress}</Text>
        <Text style={styles.materialDate}>{item.date}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => handleOpen(item.title)}
        >
          <Text style={styles.buttonText}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Ionicons name="trash" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Offline Materials</Text>
        <Text style={styles.subtitle}>
          Access your downloaded study resources anytime, even without an internet connection.
        </Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search your offline resources..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={offlineMaterials.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <Text style={styles.storageInfo}>3 GB of 5 GB used</Text>
        <TouchableOpacity
          style={styles.clearAllButton}
          onPress={() => Alert.alert('Clear All Data', 'Are you sure you want to delete all offline materials?')}
        >
          <Text style={styles.clearAllText}>Clear All Offline Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  materialCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  materialInfo: {
    marginBottom: 8,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  materialType: {
    fontSize: 12,
    color: '#777',
  },
  materialProgress: {
    fontSize: 12,
    color: '#777',
  },
  materialDate: {
    fontSize: 12,
    color: '#777',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 4,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
  footer: {
    marginTop: 16,
    alignItems: 'center',
  },
  storageInfo: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },
  clearAllButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 4,
  },
  clearAllText: {
    color: '#fff',
  },
});
