import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

const OfflineTestScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes in seconds
  const [markedForReview, setMarkedForReview] = useState([]);

  const questions = [
    { id: 1, text: 'What is the value of Pi?', options: ['3.14', '2.72', '1.62', '4.67'] },
    { id: 2, text: 'What is 2 + 2?', options: ['3', '4', '5', '6'] },
    { id: 3, text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'] },
  ];

  const handleAnswerSelect = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert('End of Test', 'You have reached the end of the test.');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleMarkForReview = () => {
    if (!markedForReview.includes(currentQuestion)) {
      setMarkedForReview([...markedForReview, currentQuestion]);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Submit Test', 'Are you sure you want to submit the test?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Submit', onPress: () => Alert.alert('Test Submitted', 'Results will sync when online.') },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Alert.alert('Go Back', 'Returning to the previous screen.')}>
          <Text style={styles.backButton}>{'< Back'}</Text>
        </TouchableOpacity>
        <View style={styles.testInfo}>
          <Text style={styles.testTitle}>Mathematics Mock Test - Part 1</Text>
          <Text style={styles.testSubtitle}>Offline test with 50 questions. Time: 60 minutes.</Text>
        </View>
        <Text style={styles.timer}>{`Time Left: ${Math.floor(timeRemaining / 60)}:${timeRemaining % 60}`}</Text>
      </View>

      {/* Main Content Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{`Q${currentQuestion + 1}: ${questions[currentQuestion].text}`}</Text>
        <FlatList
          data={questions[currentQuestion].options}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.option,
                answers[currentQuestion] === item && styles.selectedOption,
              ]}
              onPress={() => handleAnswerSelect(item)}
            >
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.reviewButton} onPress={handleMarkForReview}>
          <Text style={styles.reviewButtonText}>Mark for Review</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <ProgressBar progress={(currentQuestion + 1) / questions.length} color={Colors.blue500} style={styles.progressBar} />
        <View style={styles.navigationButtons}>
          <TouchableOpacity onPress={handlePreviousQuestion} disabled={currentQuestion === 0}>
            <Text style={[styles.navButton, currentQuestion === 0 && styles.disabledButton]}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
            <Text style={[styles.navButton, currentQuestion === questions.length - 1 && styles.disabledButton]}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.submitButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#fff' },
  backButton: { fontSize: 16, color: '#007AFF' },
  testInfo: { flex: 1, paddingHorizontal: 16 },
  testTitle: { fontSize: 18, fontWeight: 'bold' },
  testSubtitle: { fontSize: 14, color: '#666' },
  timer: { fontSize: 16, color: '#FF3B30' },
  questionContainer: { flex: 1, padding: 16 },
  questionText: { fontSize: 16, fontWeight: 'bold', marginBottom: 16 },
  option: { padding: 12, marginVertical: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
  selectedOption: { backgroundColor: '#D4E8FF', borderColor: '#007AFF' },
  optionText: { fontSize: 14 },
  reviewButton: { marginTop: 16, padding: 12, backgroundColor: '#FFDD57', borderRadius: 8 },
  reviewButtonText: { fontSize: 14, textAlign: 'center', fontWeight: 'bold' },
  footer: { padding: 16, backgroundColor: '#fff' },
  progressBar: { height: 8, borderRadius: 4, marginBottom: 16 },
  navigationButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  navButton: { fontSize: 16, color: '#007AFF' },
  disabledButton: { color: '#ccc' },
  submitButton: { fontSize: 16, color: '#FF3B30' },
});

export default OfflineTestScreen;
