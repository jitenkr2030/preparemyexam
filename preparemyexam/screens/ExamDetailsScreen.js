import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Share } from 'react-native';

const ExamDetailsScreen = () => {
  const examDetails = {
    name: "JEE Advanced 2024",
    overview: "Engineering entrance exam for IITs and NITs.",
    category: "National Exam",
    difficulty: "Hard",
    syllabus: {
      Physics: ["Mechanics", "Thermodynamics", "Optics"],
      Math: ["Calculus", "Linear Algebra", "Probability"],
    },
    dates: {
      registrationOpens: "1st March 2024",
      examDate: "15th May 2024",
      resultsAnnouncement: "15th June 2024",
    },
    pattern: [
      {
        paper: "Paper 1",
        duration: "3 hours",
        totalQuestions: 50,
      },
      {
        paper: "Paper 2",
        duration: "3 hours",
        totalQuestions: 50,
      },
    ],
    resources: ["Material 1", "Material 2", "Material 3"],
  };

  const onShare = async () => {
    try {
      await Share.share({
        message: `Check out the details for ${examDetails.name}!`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Exam Details</Text>
        <TouchableOpacity onPress={onShare}>
          <Text style={styles.shareButton}>Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.examName}>{examDetails.name}</Text>
          <Text style={styles.overview}>{examDetails.overview}</Text>
          <Text style={styles.tag}>Category: {examDetails.category}</Text>
          <Text style={[styles.tag, styles.difficulty]}>Difficulty: {examDetails.difficulty}</Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Start Preparing</Text>
          </TouchableOpacity>
        </View>

        {/* Body Section */}
        <View style={styles.bodySection}>
          {/* Syllabus */}
          <Text style={styles.sectionHeader}>Syllabus</Text>
          {Object.entries(examDetails.syllabus).map(([subject, topics], index) => (
            <View key={index}>
              <Text style={styles.subject}>{subject}</Text>
              {topics.map((topic, idx) => (
                <Text key={idx} style={styles.topic}>{`- ${topic}`}</Text>
              ))}
            </View>
          ))}
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadText}>Download Full Syllabus</Text>
          </TouchableOpacity>

          {/* Exam Dates */}
          <Text style={styles.sectionHeader}>Important Dates</Text>
          {Object.entries(examDetails.dates).map(([key, date], index) => (
            <Text key={index} style={styles.dateItem}>{`${key.replace(/([A-Z])/g, " $1")}: ${date}`}</Text>
          ))}

          {/* Exam Pattern */}
          <Text style={styles.sectionHeader}>Exam Pattern</Text>
          {examDetails.pattern.map((item, index) => (
            <View key={index}>
              <Text style={styles.patternItem}>{`${item.paper}: Duration ${item.duration}, Total Questions: ${item.totalQuestions}`}</Text>
            </View>
          ))}
        </View>

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Save to Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Start Preparing</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  backButton: { fontSize: 18, color: "#007BFF" },
  title: { fontSize: 20, fontWeight: "bold" },
  shareButton: { fontSize: 16, color: "#007BFF" },
  heroSection: { padding: 16, alignItems: "center" },
  examName: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  overview: { fontSize: 16, marginBottom: 8 },
  tag: { fontSize: 14, marginBottom: 4 },
  difficulty: { color: "red" },
  ctaButton: { backgroundColor: "#007BFF", borderRadius: 8, padding: 12, marginTop: 16 },
  ctaButtonText: { color: "#fff", fontWeight: "bold" },
  bodySection: { padding: 16 },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginTop: 16 },
  subject: { fontSize: 16, fontWeight: "bold", marginTop: 8 },
  topic: { fontSize: 14, marginLeft: 8 },
  downloadButton: { marginTop: 8, alignSelf: "center" },
  downloadText: { color: "#007BFF" },
  dateItem: { fontSize: 14, marginTop: 4 },
  patternItem: { fontSize: 14, marginTop: 4 },
  footerSection: { flexDirection: "row", justifyContent: "space-around", padding: 16 },
  footerButton: { backgroundColor: "#007BFF", borderRadius: 8, padding: 12 },
  footerButtonText: { color: "#fff", fontWeight: "bold" },
});

export default ExamDetailsScreen;
