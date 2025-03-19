import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const QAScreen = () => {
  const questions = [
    {
      id: '1',
      title: 'What are the best practices for learning Python?',
      category: 'Technology',
      answers: 5,
      snippet: 'One of the best practices for learning Python is to build small projects...',
      author: 'Expert in Python',
    },
    {
      id: '2',
      title: 'How do I prepare for a job interview?',
      category: 'Career',
      answers: 3,
      snippet: 'To prepare for a job interview, research the company thoroughly...',
      author: 'Top Career Coach',
    },
  ];

  const renderQuestionCard = ({ item }) => (
    <View style={styles.questionCard}>
      <Text style={styles.questionTitle}>{item.title}</Text>
      <Text style={styles.questionMeta}>Posted in {item.category} | {item.answers} Answers</Text>
      <Text style={styles.answerSnippet}>{item.snippet}</Text>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>View Answers</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>Follow</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Q&A</Text>
        <Text style={styles.screenSubtitle}>Ask questions and get answers from experts.</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Search for questions or answers"
          style={styles.searchInput}
        />
      </View>

      {/* Categories Filter */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesFilter}>
        {['Technology', 'Career', 'Health', 'Education'].map((category) => (
          <TouchableOpacity key={category} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Questions List */}
      <FlatList
        data={questions}
        renderItem={renderQuestionCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.questionsList}
      />

      {/* Ask a Question Button */}
      <TouchableOpacity style={styles.askButton}>
        <FontAwesome name="question-circle" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.askButtonText}>Ask a Question</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { padding: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ddd' },
  backButton: { position: 'absolute', top: 20, left: 16 },
  screenTitle: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  screenSubtitle: { fontSize: 14, color: 'gray', textAlign: 'center', marginTop: 4 },
  searchBar: { flexDirection: 'row', alignItems: 'center', padding: 10, margin: 16, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16 },
  categoriesFilter: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 8 },
  categoryButton: { padding: 10, marginRight: 8, backgroundColor: '#e1ecf4', borderRadius: 20 },
  categoryText: { fontSize: 14, color: '#007bff' },
  questionsList: { paddingHorizontal: 16, paddingBottom: 80 },
  questionCard: { padding: 16, marginBottom: 16, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  questionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  questionMeta: { fontSize: 12, color: 'gray', marginBottom: 8 },
  answerSnippet: { fontSize: 14, color: '#333', marginBottom: 8 },
  cardActions: { flexDirection: 'row', justifyContent: 'space-between' },
  actionButton: { paddingVertical: 4 },
  actionText: { fontSize: 14, color: '#007bff' },
  askButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 16, left: 16, right: 16, padding: 16, backgroundColor: '#007bff', borderRadius: 8 },
  askButtonText: { fontSize: 16, color: 'white', fontWeight: 'bold' },
});

export default QAScreen;
