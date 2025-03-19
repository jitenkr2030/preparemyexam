import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [search, setSearch] = useState("");

  const categories = [
    { id: 1, name: "National Exams" },
    { id: 2, name: "State Exams" },
    { id: 3, name: "International Exams" },
  ];

  const featuredExams = [
    { id: 1, name: "JEE Advanced 2024", date: "15th May 2024" },
    { id: 2, name: "NEET UG 2024", date: "5th June 2024" },
  ];

  const allExams = [
    { id: 1, name: "JEE Advanced 2024", category: "National", difficulty: "Hard" },
    { id: 2, name: "NEET UG 2024", category: "National", difficulty: "Medium" },
    { id: 3, name: "GRE 2024", category: "International", difficulty: "Medium" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Discover Exams</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search exams by name, type, or subject..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Browse by Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <View key={category.id} style={styles.categoryCard}>
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Featured Exams Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Featured Exams</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredExams.map((exam) => (
              <View key={exam.id} style={styles.examCard}>
                <Text style={styles.examName}>{exam.name}</Text>
                <Text style={styles.examDate}>📅 {exam.date}</Text>
                <TouchableOpacity style={styles.detailsButton}>
                  <Text style={styles.detailsButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* All Exams Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>All Exams</Text>
          <FlatList
            data={allExams}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemName}>{item.name}</Text>
                <Text style={styles.listItemDetails}>
                  Category: {item.category} | Difficulty: {item.difficulty}
                </Text>
                <TouchableOpacity style={styles.detailsButton}>
                  <Text style={styles.detailsButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Start Exploring Exams</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Can't find your exam?{" "}
          <Text style={styles.footerLink}>Suggest it here.</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  header: { padding: 20, backgroundColor: "#fff", elevation: 2 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  searchBar: {
    backgroundColor: "#f1f3f5",
    padding: 10,
    borderRadius: 8,
  },
  section: { marginVertical: 10, paddingHorizontal: 20 },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  categoryCard: {
    backgroundColor: "#e9ecef",
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryText: { fontSize: 16, fontWeight: "bold" },
  examCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    marginRight: 10,
  },
  examName: { fontSize: 16, fontWeight: "bold" },
  examDate: { fontSize: 14, color: "#6c757d", marginBottom: 10 },
  detailsButton: {
    backgroundColor: "#007bff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  detailsButtonText: { color: "#fff", fontWeight: "bold" },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  listItemName: { fontSize: 16, fontWeight: "bold" },
  listItemDetails: { fontSize: 14, color: "#6c757d", marginBottom: 10 },
  footer: { padding: 20, alignItems: "center", backgroundColor: "#fff" },
  ctaButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  ctaButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  footerText: { marginTop: 10, fontSize: 14, color: "#6c757d" },
  footerLink: { color: "#007bff", textDecorationLine: "underline" },
});
