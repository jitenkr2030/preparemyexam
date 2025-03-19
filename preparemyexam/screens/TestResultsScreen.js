import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ProgressBarAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TestResultsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Test Results</Text>
        <Text style={styles.subtitle}>Math – Advanced Level</Text>
        <Text style={styles.subtitle}>Completed on 24 Dec 2024</Text>
      </View>

      {/* Performance Overview */}
      <View style={styles.performanceOverview}>
        <Text style={styles.score}>Your Score: 80/100</Text>
        <Text style={styles.percent}>80%</Text>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.8} color="#4CAF50" />
      </View>

      {/* Section-wise Performance Breakdown */}
      <View style={styles.sectionBreakdown}>
        <Text style={styles.sectionTitle}>Section Performance</Text>
        {['Algebra', 'Geometry', 'Trigonometry'].map((topic, index) => (
          <View key={index} style={styles.sectionItem}>
            <Text style={styles.sectionText}>{`${topic}: 85/100`}</Text>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.85} color="#4CAF50" />
          </View>
        ))}
      </View>

      {/* Correct vs Incorrect Analysis */}
      <View style={styles.analysis}>
        <Text style={styles.sectionTitle}>Answer Analysis</Text>
        <View style={styles.analysisItem}>
          <Text style={styles.analysisText}>Correct Answers: 18/20</Text>
          <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.9} color="#4CAF50" />
        </View>
        <View style={styles.analysisItem}>
          <Text style={styles.analysisText}>Incorrect Answers: 2/20</Text>
          <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.1} color="#F44336" />
        </View>
        <View style={styles.analysisItem}>
          <Text style={styles.analysisText}>Unanswered: 0/20</Text>
          <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0} color="#9E9E9E" />
        </View>
      </View>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Review Incorrect Answers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.buttonText}>Retake Test</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.buttonText}>Share Results</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
  performanceOverview: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  percent: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 10,
  },
  sectionBreakdown: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionItem: {
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  analysis: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  analysisItem: {
    marginBottom: 10,
  },
  analysisText: {
    fontSize: 16,
    marginBottom: 5,
  },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default TestResultsScreen;
