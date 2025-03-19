import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Use Expo's Picker

export default function App() {
  const [subject, setSubject] = useState('Mathematics');
  const [topic, setTopic] = useState('Algebra');
  const [difficulty, setDifficulty] = useState('Easy');
  const [questionType, setQuestionType] = useState('MCQ');
  const [timeLimit, setTimeLimit] = useState('1 minute');
  const [questions, setQuestions] = useState([]);
  const [showHints, setShowHints] = useState(false);

  const generateQuestions = () => {
    // Implement AI logic to generate questions based on user settings
    // For demonstration purposes, we'll use static data
    const generatedQuestions = [
      { id: 1, text: 'What is the derivative of x^2?', difficulty: 'Easy', type: 'MCQ' },
      { id: 2, text: 'What is the integral of x^2?', difficulty: 'Medium', type: 'Short Answer' },
      { id: 3, text: 'What is the value of x in 2x + 5 = 11?', difficulty: 'Hard', type: 'True/False' },
    ];
    setQuestions(generatedQuestions);
  };

  const submitAnswer = (questionId, answer) => {
    // Implement logic to submit answer and display feedback
    console.log(`Submitted answer for question ${questionId}: ${answer}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>AI-Generated Questions</Text>
      </View>

      <ScrollView style={styles.settingsContainer}>
        <Text style={styles.settingLabel}>Select Subject:</Text>
        <Picker
          selectedValue={subject}
          onValueChange={(itemValue) => setSubject(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Mathematics" value="Mathematics" key="math" />
          <Picker.Item label="Physics" value="Physics" key="physics" />
          <Picker.Item label="Chemistry" value="Chemistry" key="chemistry" />
        </Picker>

        <Text style={styles.settingLabel}>Select Topic:</Text>
        <Picker
          selectedValue={topic}
          onValueChange={(itemValue) => setTopic(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Algebra" value="Algebra" key="algebra" />
          <Picker.Item label="Mechanics" value="Mechanics" key="mechanics" />
          <Picker.Item label="Organic Chemistry" value="Organic Chemistry" key="organic-chem" />
        </Picker>

        <Text style={styles.settingLabel}>Select Difficulty Level:</Text>
        <Picker
          selectedValue={difficulty}
          onValueChange={(itemValue) => setDifficulty(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Easy" value="Easy" key="easy" />
          <Picker.Item label="Medium" value="Medium" key="medium" />
          <Picker.Item label="Hard" value="Hard" key="hard" />
        </Picker>

        <Text style={styles.settingLabel}>Select Question Type:</Text>
        <Picker
          selectedValue={questionType}
          onValueChange={(itemValue) => setQuestionType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="MCQ" value="MCQ" key="mcq" />
          <Picker.Item label="Short Answer" value="Short Answer" key="short-answer" />
          <Picker.Item label="True/False" value="True/False" key="true-false" />
        </Picker>

        <Text style={styles.settingLabel}>Set Time Limit per Question:</Text>
        <Picker
          selectedValue={timeLimit}
          onValueChange={(itemValue) => setTimeLimit(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="1 minute" value="1 minute" key="1-min" />
          <Picker.Item label="2 minutes" value="2 minutes" key="2-min" />
          <Picker.Item label="Unlimited time" value="Unlimited time" key="unlimited" />
        </Picker>

        <TouchableOpacity style={styles.generateButton} onPress={generateQuestions}>
          <Text style={styles.generateButtonText}>Generate Questions</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView style={styles.questionsContainer}>
        {questions.map((question) => (
          <View key={question.id} style={styles.questionCard}>
            <Text style={styles.questionText}>{question.text}</Text>
            <Text style={styles.difficultyIndicator}>Difficulty: {question.difficulty}</Text>
            <Text style={styles.questionTypeIndicator}>Type: {question.type}</Text>

            {showHints && (
              <Text style={styles.hint}>Hint: Remember to use the power rule for derivatives</Text>
            )}

            <TextInput
              style={styles.answerInput}
              placeholder="Enter your answer"
              onChangeText={(text) => submitAnswer(question.id, text)}
              keyboardType="default"
            />

            <TouchableOpacity style={styles.submitButton} onPress={() => submitAnswer(question.id, '')}>
              <Text style={styles.submitButtonText}>Submit Answer</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.toggleHintsButton} onPress={() => setShowHints(!showHints)}>
          <Text style={styles.toggleHintsButtonText}>{showHints ? 'Hide Hints' : 'Show Hints'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitAllButton} onPress={() => console.log('Submit all answers pressed')}>
          <Text style={styles.submitAllButtonText}>Submit All Answers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    fontSize: 18,
    color: '#007bff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  settingsContainer: {
    padding: 20,
  },
  settingLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    marginBottom: 20,
  },
  generateButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  generateButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  questionsContainer: {
    padding: 20,
  },
  questionCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  difficultyIndicator: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  questionTypeIndicator: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  hint: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  answerInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  toggleHintsButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  toggleHintsButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  submitAllButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  submitAllButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});