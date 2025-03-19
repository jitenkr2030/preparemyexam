import React from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";

const App = () => {
  const categories = [
    { id: "1", name: "Physics", icon: "🔬" },
    { id: "2", name: "Mathematics", icon: "π" },
    { id: "3", name: "Chemistry", icon: "⚗️" },
    { id: "4", name: "Engineering", icon: "⚙️" },
    { id: "5", name: "Medical", icon: "🩺" },
  ];

  const recommendations = [
    {
      id: "1",
      title: "Physics Revision Notes",
      description: "Comprehensive notes on mechanics and thermodynamics.",
      tags: ["Free", "PDF"],
    },
    {
      id: "2",
      title: "Advanced Chemistry",
      description: "Textbook covering all NEET syllabus topics.",
      tags: ["Premium", "PDF"],
    },
  ];

  const recentUploads = [
    { id: "1", title: "Algebra Notes", uploader: "ABC Institute", date: "Dec 24, 2024" },
    { id: "2", title: "Organic Chemistry Notes", uploader: "XYZ Academy", date: "Dec 22, 2024" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Study Material Hub</Text>
      </View>
      
      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search for study materials, notes, textbooks..." />

      {/* Categories */}
      <Text style={styles.sectionTitle}>Explore by Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryTile}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recommendations */}
      <Text style={styles.sectionTitle}>Recommended for You</Text>
      <ScrollView horizontal>
        {recommendations.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image style={styles.cardImage} source={{ uri: "https://via.placeholder.com/100" }} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <View style={styles.tags}>
              {item.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Recent Uploads */}
      <Text style={styles.sectionTitle}>Recent Uploads</Text>
      {recentUploads.map((upload) => (
        <View key={upload.id} style={styles.uploadItem}>
          <Text style={styles.uploadTitle}>{upload.title}</Text>
          <Text style={styles.uploadDetails}>{`Uploaded by ${upload.uploader} on ${upload.date}`}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Preview</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  backButton: { marginRight: 16 },
  backButtonText: { fontSize: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  searchBar: { backgroundColor: "#e0e0e0", borderRadius: 8, padding: 10, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  categoryContainer: { flexDirection: "row", flexWrap: "wrap", marginBottom: 16 },
  categoryTile: { alignItems: "center", width: "30%", margin: "1.5%" },
  categoryIcon: { fontSize: 30, marginBottom: 8 },
  categoryText: { fontSize: 14 },
  card: { backgroundColor: "#fff", borderRadius: 8, padding: 8, marginRight: 16, width: 200 },
  cardImage: { width: "100%", height: 100, borderRadius: 8, marginBottom: 8 },
  cardTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  cardDescription: { fontSize: 12, color: "#555", marginBottom: 8 },
  tags: { flexDirection: "row", flexWrap: "wrap" },
  tag: { backgroundColor: "#ddd", borderRadius: 4, padding: 4, marginRight: 4, fontSize: 10 },
  uploadItem: { marginBottom: 16 },
  uploadTitle: { fontSize: 16, fontWeight: "bold" },
  uploadDetails: { fontSize: 12, color: "#555" },
  button: { backgroundColor: "#007BFF", padding: 8, borderRadius: 4, marginTop: 8 },
  buttonText: { color: "#fff", textAlign: "center" },
});

export default App;
