import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';

export default function FeedbackScreen() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ["Ease of Use", "Features", "Performance", "Design"];

  const handleTagPress = (tag) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((item) => item !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  const handleSubmit = () => {
    if (rating === 0 || feedback.trim() === '') {
      Alert.alert("Error", "Please provide a rating or feedback before submitting.");
    } else {
      Alert.alert("Thank You", "Thank you for your feedback! We’re always working to make your experience better.");
      setRating(0);
      setFeedback('');
      setSelectedTags([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We Value Your Feedback!</Text>
      <Text style={styles.subtitle}>Help us improve by sharing your experience.</Text>

      <Text style={styles.header}>Rate Your Experience</Text>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={40}
        startingValue={rating}
        onFinishRating={setRating}
        style={styles.rating}
      />

      <Text style={styles.header}>Tell Us More</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Share your suggestions, issues, or compliments..."
        multiline
        value={feedback}
        onChangeText={setFeedback}
        autoCorrect={false}
      />

      <Text style={styles.header}>Select What Applies</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[
              styles.tag,
              selectedTags.includes(tag) ? styles.selectedTag : {},
            ]}
            onPress={() => handleTagPress(tag)}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionalButton} onPress={() => Alert.alert('Redirecting to Help & Support')}>
        <Text style={styles.optionalText}>Need Further Help?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Skipping feedback')}>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#777',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  rating: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  textInput: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedTag: {
    backgroundColor: '#2196F3',
  },
  tagText: {
    fontSize: 14,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionalButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  optionalText: {
    color: '#2196F3',
    fontSize: 14,
  },
  skipText: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
  },
});
