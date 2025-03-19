import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [topics, setTopics] = useState([
    {
      title: "Algebra",
      progress: 0.5,
      subTopics: [
        { title: "Linear Equations", questions: 20, difficulty: "Medium" },
        { title: "Quadratic Equations", questions: 15, difficulty: "Hard" },
      ],
    },
    {
      title: "Physics",
      progress: 0.7,
      subTopics: [
        { title: "Projectile Motion", questions: 10, difficulty: "Easy" },
        { title: "Laws of Motion", questions: 25, difficulty: "Medium" },
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Practice Questions</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search topics or question sets"
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText("")}>
            <Ionicons name="close-circle" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>

      {/* Topic List */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {topics.map((topic, index) => (
          <View key={index} style={styles.topicContainer}>
            <Text style={styles.topicTitle}>{topic.title}</Text>
            <ProgressBar progress={topic.progress} color="#4caf50" style={styles.progressBar} />
            {topic.subTopics.map((subTopic, idx) => (
              <View key={idx} style={styles.subTopicCard}>
                <View>
                  <Text style={styles.subTopicTitle}>{subTopic.title}</Text>
                  <Text style={styles.subTopicDetails}>
                    {subTopic.questions} Questions • {subTopic.difficulty}
                  </Text>
                </View>
                <TouchableOpacity style={styles.startButton}>
                  <Text style={styles.startButtonText}>Start Test</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <Ionicons name="home" size={24} color="gray" />
        <Ionicons name="book" size={24} color="gray" />
        <Ionicons name="clipboard" size={24} color="#4caf50" />
        <Ionicons name="person" size={24} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  header: { flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: "#fff" },
  headerTitle: { flex: 1, textAlign: "center", fontSize: 18, fontWeight: "bold", color: "#333" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 16,
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: { marginHorizontal: 8 },
  searchInput: { flex: 1, fontSize: 16 },
  scrollView: { padding: 16 },
  topicContainer: { marginBottom: 24 },
  topicTitle: { fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 8 },
  progressBar: { height: 8, borderRadius: 4, marginBottom: 16 },
  subTopicCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subTopicTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  subTopicDetails: { fontSize: 14, color: "#666" },
  startButton: { backgroundColor: "#4caf50", padding: 8, borderRadius: 8 },
  startButtonText: { color: "#fff", fontWeight: "bold" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});
