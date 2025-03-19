import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPushEnabled, setIsPushEnabled] = useState(true);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [isSMSEnabled, setIsSMSEnabled] = useState(true);
  const [isProfileVisible, setIsProfileVisible] = useState(true);
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color={isDarkMode ? '#FFF' : '#000'} />
        </TouchableOpacity>
        <View>
          <Text style={[styles.title, isDarkMode && styles.darkText]}>Settings</Text>
          <Text style={[styles.subtitle, isDarkMode && styles.darkText]}>Customize your preferences and manage your account.</Text>
        </View>
      </View>

      {/* Account Settings Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionHeader, isDarkMode && styles.darkText]}>Account Settings</Text>
        <View style={styles.profileContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profilePicture} />
          <TextInput
            style={[styles.input, isDarkMode && styles.darkInput]}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
          />
          <TextInput
            style={[styles.input, isDarkMode && styles.darkInput]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* App Preferences Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionHeader, isDarkMode && styles.darkText]}>App Preferences</Text>
        <View style={styles.preferenceRow}>
          <Text style={[styles.label, isDarkMode && styles.darkText]}>Theme</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: '#CCC', true: '#4CAF50' }}
          />
        </View>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionHeader, isDarkMode && styles.darkText]}>Notifications</Text>
        <View style={styles.preferenceRow}>
          <Text style={[styles.label, isDarkMode && styles.darkText]}>Push Notifications</Text>
          <Switch
            value={isPushEnabled}
            onValueChange={setIsPushEnabled}
            trackColor={{ false: '#CCC', true: '#4CAF50' }}
          />
        </View>
        <View style={styles.preferenceRow}>
          <Text style={[styles.label, isDarkMode && styles.darkText]}>Email Notifications</Text>
          <Switch
            value={isEmailEnabled}
            onValueChange={setIsEmailEnabled}
            trackColor={{ false: '#CCC', true: '#4CAF50' }}
          />
        </View>
        <View style={styles.preferenceRow}>
          <Text style={[styles.label, isDarkMode && styles.darkText]}>SMS Notifications</Text>
          <Switch
            value={isSMSEnabled}
            onValueChange={setIsSMSEnabled}
            trackColor={{ false: '#CCC', true: '#4CAF50' }}
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  darkText: {
    color: '#FFF',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  darkInput: {
    borderColor: '#444',
    color: '#FFF',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#FF3B30',
  },
  logoutText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  preferenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
  },
  saveButton: {
    margin: 20,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
