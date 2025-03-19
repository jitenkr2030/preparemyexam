import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  CheckBox,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { ProgressBar } from 'react-native-paper';

export default function ProfileSetupScreen() {
  const [ageGroup, setAgeGroup] = useState('');
  const [studyMode, setStudyMode] = useState('');
  const [studyGoals, setStudyGoals] = useState([]);
  const [customGoal, setCustomGoal] = useState('');
  const [examSelection, setExamSelection] = useState([]);
  const [name, setName] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleGoalToggle = (goal) => {
    if (studyGoals.includes(goal)) {
      setStudyGoals(studyGoals.filter((item) => item !== goal));
    } else {
      setStudyGoals([...studyGoals, goal]);
    }
  };

  const handleExamToggle = (exam) => {
    if (examSelection.includes(exam)) {
      setExamSelection(examSelection.filter((item) => item !== exam));
    } else {
      setExamSelection([...examSelection, exam]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Set Up Your Profile!</Text>
      <Text style={styles.subtitle}>Tell us about yourself to personalize your experience.</Text>

      {/* Step Indicator */}
      <ProgressBar progress={currentStep / 3} color="#4caf50" style={styles.progressBar} />
      <Text style={styles.stepText}>Step {currentStep} of 3</Text>

      {/* Dynamic Content Based on Step */}
      {currentStep === 1 && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.sectionTitle}>Age Group</Text>
          <RadioButton.Group onValueChange={setAgeGroup} value={ageGroup}>
            <RadioButton.Item label="Under 18" value="Under 18" />
            <RadioButton.Item label="18-25" value="18-25" />
            <RadioButton.Item label="26-35" value="26-35" />
            <RadioButton.Item label="36 and above" value="36 and above" />
          </RadioButton.Group>
          <Text style={styles.sectionTitle}>Study Mode</Text>
          <RadioButton.Group onValueChange={setStudyMode} value={studyMode}>
            <RadioButton.Item label="Self-study" value="Self-study" />
            <RadioButton.Item label="Coaching" value="Coaching" />
            <RadioButton.Item label="Both" value="Both" />
          </RadioButton.Group>
        </View>
      )}

      {currentStep === 2 && (
        <View>
          <Text style={styles.sectionTitle}>What are your study goals?</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={studyGoals.includes('Score improvement')}
              onValueChange={() => handleGoalToggle('Score improvement')}
            />
            <Text style={styles.checkboxLabel}>Score improvement</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={studyGoals.includes('Exam qualification')}
              onValueChange={() => handleGoalToggle('Exam qualification')}
            />
            <Text style={styles.checkboxLabel}>Exam qualification</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={studyGoals.includes('Subject mastery')}
              onValueChange={() => handleGoalToggle('Subject mastery')}
            />
            <Text style={styles.checkboxLabel}>Subject mastery</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={studyGoals.includes('Others')}
              onValueChange={() => handleGoalToggle('Others')}
            />
            <Text style={styles.checkboxLabel}>Others</Text>
          </View>
          {studyGoals.includes('Others') && (
            <TextInput
              style={styles.input}
              placeholder="Specify your goal"
              value={customGoal}
              onChangeText={setCustomGoal}
            />
          )}
        </View>
      )}

      {currentStep === 3 && (
        <View>
          <Text style={styles.sectionTitle}>Select the exams you're preparing for:</Text>
          <TextInput
            style={styles.input}
            placeholder="Search exams (e.g., JEE, NEET, GRE)"
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={examSelection.includes('JEE')}
              onValueChange={() => handleExamToggle('JEE')}
            />
            <Text style={styles.checkboxLabel}>JEE</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={examSelection.includes('NEET')}
              onValueChange={() => handleExamToggle('NEET')}
            />
            <Text style={styles.checkboxLabel}>NEET</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={examSelection.includes('GRE')}
              onValueChange={() => handleExamToggle('GRE')}
            />
            <Text style={styles.checkboxLabel}>GRE</Text>
          </View>
        </View>
      )}

      {/* CTA Section */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCurrentStep((prev) => Math.min(prev + 1, 3))}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.skipText}>Skip for Now</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <Text style={styles.footerText}>
        You can update this information anytime in your profile settings.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  stepText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4caf50',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
  },
});