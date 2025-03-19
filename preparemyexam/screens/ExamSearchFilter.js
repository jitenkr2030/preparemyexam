import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Chip, RadioButton, Checkbox } from 'react-native-paper';

export default function SearchFilterScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  const categories = ['Engineering', 'Medical', 'Law', 'Management', 'Government Jobs'];
  const levels = ['National', 'State', 'Local', 'International'];
  const subjects = ['Physics', 'Math', 'Biology', 'History'];
  const difficulty = ['Easy', 'Medium', 'Hard'];

  const exams = [
    { title: 'JEE Advanced 2024', description: 'Engineering entrance exam for IITs and NITs.', level: 'National', difficulty: 'Hard' },
    { title: 'NEET 2024', description: 'Medical entrance exam for MBBS/BDS.', level: 'National', difficulty: 'Medium' },
  ];

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleCategorySelect = (category) => {
    const newCategories = selectedCategory.includes(category)
      ? selectedCategory.filter(item => item !== category)
      : [...selectedCategory, category];
    setSelectedCategory(newCategories);
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleDifficultySelect = (level) => {
    const newDifficulty = selectedDifficulty.includes(level)
      ? selectedDifficulty.filter(item => item !== level)
      : [...selectedDifficulty, level];
    setSelectedDifficulty(newDifficulty);
  };

  const handleSubjectSelect = (subject) => {
    const newSubjects = selectedSubjects.includes(subject)
      ? selectedSubjects.filter(item => item !== subject)
      : [...selectedSubjects, subject];
    setSelectedSubjects(newSubjects);
  };

  const renderExamCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.tags}>{item.level} - {item.difficulty}</Text>
      <TouchableOpacity style={styles.viewDetailsButton}>
        <Text style={styles.viewDetailsText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search & Filter</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.resetButton}>Reset All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Search Bar Section */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for exams, subjects, or categories…"
            value={searchText}
            onChangeText={handleSearch}
          />
          <TouchableOpacity>
            <MaterialIcons name="mic" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Filters Section */}
        <Text style={styles.filterHeader}>Category</Text>
        <View style={styles.filterSection}>
          {categories.map((category, index) => (
            <Chip
              key={index}
              selected={selectedCategory.includes(category)}
              onPress={() => handleCategorySelect(category)}
              style={styles.chip}
            >
              {category}
            </Chip>
          ))}
        </View>

        <Text style={styles.filterHeader}>Level</Text>
        <RadioButton.Group onValueChange={handleLevelSelect} value={selectedLevel}>
          {levels.map((level, index) => (
            <View key={index} style={styles.radioButtonContainer}>
              <RadioButton value={level} />
              <Text>{level}</Text>
            </View>
          ))}
        </RadioButton.Group>

        <Text style={styles.filterHeader}>Subjects</Text>
        <View style={styles.filterSection}>
          {subjects.map((subject, index) => (
            <Checkbox.Item
              key={index}
              label={subject}
              status={selectedSubjects.includes(subject) ? 'checked' : 'unchecked'}
              onPress={() => handleSubjectSelect(subject)}
            />
          ))}
        </View>

        <Text style={styles.filterHeader}>Difficulty Level</Text>
        <View style={styles.filterSection}>
          {difficulty.map((level, index) => (
            <Checkbox.Item
              key={index}
              label={level}
              status={selectedDifficulty.includes(level) ? 'checked' : 'unchecked'}
              onPress={() => handleDifficultySelect(level)}
            />
          ))}
        </View>

        <Text style={styles.filterHeader}>Exam Date</Text>
        <View style={styles.datePicker}>
          <Text>From: {dateRange.from}</Text>
          <Text>To: {dateRange.to}</Text>
        </View>

        {/* Result Count and Exam Cards */}
        <Text style={styles.resultCount}>Found {exams.length} exams matching your criteria.</Text>
        <FlatList
          data={exams}
          renderItem={renderExamCard}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>

      {/* Footer Section */}
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resetButton: {
    color: '#007bff',
  },
  scrollView: {
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  filterSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  chip: {
    marginRight: 10,
    marginBottom: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  datePicker: {
    marginBottom: 20,
  },
  resultCount: {
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  tags: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  viewDetailsButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
  viewDetailsText: {
    color: '#fff',
  },
  applyButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
