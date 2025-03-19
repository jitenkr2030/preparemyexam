import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+91-9876543210");
  const [ageGroup, setAgeGroup] = useState("18-25");
  const [studyMode, setStudyMode] = useState("Self-study");
  const [goals, setGoals] = useState(["Score Improvement", "Subject Mastery"]);
  const [exams, setExams] = useState(["JEE", "GRE"]);

  const handleSaveChanges = () => {
    alert("Changes saved!");
  };

  const handleCancelChanges = () => {
    alert("Changes reverted!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <Text style={styles.subtitle}>View or update your details and preferences.</Text>
      </View>

      {/* Profile Picture and Name Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.profilePicture}
        />
        <TouchableOpacity>
          <Text style={styles.changePicture}>Change Picture</Text>
        </TouchableOpacity>
        <Text style={styles.profileName}>{name}</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Personal Details Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.value}>{email}</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.value}>{phone}</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Age Group</Text>
        <Text style={styles.value}>{ageGroup}</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.label}>Preferred Study Mode</Text>
        <Text style={styles.value}>{studyMode}</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Study Goals</Text>
        <Text style={styles.value}>{goals.join(", ")}</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Exam Information Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.label}>Exams Preparing For</Text>
        <Text style={styles.value}>{exams.join(", ")}</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* CTA Section */}
      <View style={styles.buttonContainer}>
        <Button title="Save Changes" onPress={handleSaveChanges} />
        <Button title="Cancel Changes" onPress={handleCancelChanges} color="gray" />
      </View>

      {/* Footer Section */}
      <Text style={styles.footer}>
        Need help updating your profile?{" "}
        <Text style={styles.contactSupport}>Contact Support</Text>.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePicture: {
    color: "blue",
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  editButton: {
    color: "blue",
    marginTop: 5,
  },
  detailsSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "gray",
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
  },
  contactSupport: {
    color: "blue",
  },
});
