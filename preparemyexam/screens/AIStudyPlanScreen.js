import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

export default function StudyPlanScreen() {
  const [studySchedule, setStudySchedule] = useState([
    { topic: 'Mathematics – Algebra', time: '1 hour', progress: 0.6, recommendation: 'Focus on Algebra today to strengthen your weak areas.' },
    { topic: 'Physics – Mechanics', time: '1 hour', progress: 0.3, recommendation: 'Practice mechanics to improve problem-solving skills.' },
    { topic: 'Chemistry – Organic Chemistry', time: '1 hour', progress: 0.7, recommendation: 'Review organic chemistry reactions and mechanisms.' }
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.topic}</Text>
      <Text style={styles.recommendation}>{item.recommendation}</Text>
      <Text style={styles.studyTime}>Study Time: {item.time}</Text>
      <ProgressBar progress={item.progress} color="green" style={styles.progressBar} />
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Study Material</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>AI Study Plan</Text>
          <Text style={styles.subtitle}>Personalized study plan tailored to your goals and schedule.</Text>
        </View>
      </View>

      <Text style={styles.introText}>Based on your learning preferences and upcoming exams, here’s your customized study schedule for the next 2 weeks.</Text>

      <Text style={styles.sectionTitle}>AI Study Recommendations</Text>
      <FlatList
        data={studySchedule}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.sectionTitle}>Recommended Study Schedule</Text>
      <View style={styles.timeSlot}>
        <Text style={styles.timeSlotText}>Physics – Mechanics (45 mins) - Moderate</Text>
        <TouchableOpacity style={styles.adjustButton}>
          <Text style={styles.adjustButtonText}>Adjust Time</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timeSlot}>
        <Text style={styles.timeSlotText}>Chemistry – Organic Chemistry (1 hour) - High</Text>
        <TouchableOpacity style={styles.adjustButton}>
          <Text style={styles.adjustButtonText}>Adjust Time</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>AI Analysis and Feedback</Text>
      <Text style={styles.feedbackText}>You’re strong in Physics, but need more practice in Mathematics.</Text>
      <Text style={styles.suggestions}>Suggestions: Focus on practicing Algebra and attempt more mock tests in Mathematics.</Text>

      <Text style={styles.sectionTitle}>Study Progress Tracker</Text>
      <ProgressBar progress={0.5} color="blue" style={styles.progressBar} />
      <Text style={styles.progressText}>Math – 5 hours (Progress: 60%)</Text>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Next Study Session</Text>
        <Text style={styles.nextSession}>Next: Physics - Mechanics (1 hour) at 4:00 PM</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Session</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.motivationalSection}>
        <Text style={styles.motivationalText}>Keep going! You’re getting closer to your goals!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  introText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  recommendation: {
    fontSize: 14,
    color: '#777',
    marginVertical: 8,
  },
  studyTime: {
    fontSize: 14,
    color: '#555',
  },
  progressBar: {
    marginVertical: 8,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  timeSlot: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  timeSlotText: {
    fontSize: 16,
    color: '#333',
  },
  adjustButton: {
    marginTop: 8,
    backgroundColor: '#2196F3',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  adjustButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  feedbackText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  suggestions: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  progressText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  nextSession: {
    fontSize: 16,
    color: '#555',
    marginVertical: 12,
  },
  motivationalSection: {
    alignItems: 'center',
    marginTop: 24,
  },
  motivationalText: {
    fontSize: 16,
    color: '#FF9800',
    fontWeight: 'bold',
  },
});
