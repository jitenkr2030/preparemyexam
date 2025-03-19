import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, Icon } from 'react-native';

const HelpAndSupportScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Handle search functionality
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.title}>Help & Support</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search FAQs or type your query..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Icon name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Section */}
      <View style={styles.contentSection}>
        {/* Category Buttons */}
        <Text style={styles.sectionTitle}>How can we help you today?</Text>
        <View style={styles.categoryButtons}>
          <TouchableOpacity style={styles.categoryButton}>
            <Icon name="book" size={40} color="#000" />
            <Text style={styles.categoryButtonText}>FAQs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Icon name="phone" size={40} color="#000" />
            <Text style={styles.categoryButtonText}>Contact Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Icon name="exclamation" size={40} color="#000" />
            <Text style={styles.categoryButtonText}>Report an Issue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Icon name="chat" size={40} color="#000" />
            <Text style={styles.categoryButtonText}>App Feedback</Text>
          </TouchableOpacity>
        </View>

        {/* FAQs Section */}
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <View style={styles.faqSection}>
          <View style={styles.faqItem}>
            <TouchableOpacity style={styles.faqQuestion}>
              <Text style={styles.faqText}>How do I reset my password?</Text>
              <Icon name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
            <View style={styles.faqAnswer}>
              <Text style={styles.faqText}>To reset your password, click on 'Forgot Password' on the login screen.</Text>
            </View>
          </View>
          <View style={styles.faqItem}>
            <TouchableOpacity style={styles.faqQuestion}>
              <Text style={styles.faqText}>How can I upgrade my subscription?</Text>
              <Icon name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
            <View style={styles.faqAnswer}>
              <Text style={styles.faqText}>Go to your profile settings and choose 'Upgrade Subscription'.</Text>
            </View>
          </View>
        </View>

        {/* Customer Support Options */}
        <Text style={styles.sectionTitle}>Need More Help?</Text>
        <View style={styles.supportButtons}>
          <TouchableOpacity style={styles.supportButton}>
            <Icon name="chat" size={30} color="#fff" />
            <Text style={styles.supportButtonText}>Live Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportButton}>
            <Icon name="phone" size={30} color="#fff" />
            <Text style={styles.supportButtonText}>Call Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportButton}>
            <Icon name="envelope" size={30} color="#fff" />
            <Text style={styles.supportButtonText}>Send an Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportButton}>
            <Icon name="book" size={30} color="#fff" />
            <Text style={styles.supportButtonText}>Explore Knowledge Base</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <View style={styles.quickLinks}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>App Feedback</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.emergencyButton}>
          <Icon name="alert-triangle" size={25} color="#fff" />
          <Text style={styles.emergencyButtonText}>Emergency Assistance</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerSection: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    borderRadius: 25,
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 25,
  },
  contentSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: '48%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryButtonText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  faqSection: {
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 10,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  faqAnswer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  faqText: {
    fontSize: 16,
  },
  supportButtons: {
    marginBottom: 20,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    marginBottom: 15,
  },
  supportButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  footerSection: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#007bff',
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  emergencyButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
});

export default HelpAndSupportScreen;
