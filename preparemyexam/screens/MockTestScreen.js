import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ProgressBarAndroid, Alert } from 'react-native';

export default function MockTestScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 20;
  const [timer, setTimer] = useState(2700); // 45 minutes in seconds
  const [selectedOption, setSelectedOption] = useState(null);
  const [markedForReview, setMarkedForReview] = useState([]);

  // Sample question data
  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["2", "3", "4", "5"],
      correctOption: "4",
    },
    {
      id: 2,
      question: "What is 3 + 5?",
      options: ["5", "8", "9", "10"],
      correctOption: "8",
    },
    // Add more questions as needed
  ];

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const markForReview = () => {
    if (!markedForReview.includes(currentQuestion)) {
      setMarkedForReview((prev) => [...prev, currentQuestion]);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" : ""}${timer % 60}`;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => Alert.alert("Go Back")}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Mock Test</Text>
          <Text style={styles.subtitle}>Math – Advanced Level</Text>
        </View>
        <Text style={[styles.timer, timer < 300 && styles.timerWarning]}>{formattedTime}</Text>
      </View>

      {/* Question Section */}
      <View style={styles.questionSection}>
        <Text style={styles.questionNumber}>Question {currentQuestion} of {totalQuestions}</Text>
        <Text style={styles.questionText}>{questions[currentQuestion - 1]?.question}</Text>
        {questions[currentQuestion - 1]?.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === option && styles.selectedOption,
            ]}
            onPress={() => setSelectedOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestion === 1 && styles.disabledButton]}
          onPress={handlePrevious}
          disabled={currentQuestion === 1}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={markForReview}>
          <Text style={styles.navButtonText}>Mark for Review</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            !selectedOption && styles.disabledButton,
          ]}
          onPress={handleNext}
          disabled={!selectedOption}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={currentQuestion / totalQuestions}
        color="#4caf50"
        style={styles.progressBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
  backButton: { padding: 8 },
  backText: { fontSize: 18, color: "#000" },
  title: { fontSize: 18, fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "#555" },
  timer: { fontSize: 16, fontWeight: "bold", color: "#4caf50" },
  timerWarning: { color: "red" },
  questionSection: { flex: 1, marginVertical: 16 },
  questionNumber: { fontSize: 16, marginBottom: 8, fontWeight: "bold" },
  questionText: { fontSize: 18, marginBottom: 16, color: "#333" },
  option: { padding: 12, marginVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: "#ccc" },
  selectedOption: { backgroundColor: "#e0f7fa", borderColor: "#00bcd4" },
  optionText: { fontSize: 16 },
  navBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 16 },
  navButton: { paddingVertical: 12, paddingHorizontal: 16, backgroundColor: "#2196f3", borderRadius: 8 },
  disabledButton: { backgroundColor: "#ccc" },
  navButtonText: { color: "#fff", fontSize: 16 },
  progressBar: { marginTop: 16 },
});
