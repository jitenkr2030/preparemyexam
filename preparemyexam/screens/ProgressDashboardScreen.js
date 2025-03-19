import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ProgressBarAndroid, Image } from "react-native";

const ProgressDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>{"< Back"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Progress Dashboard</Text>
        <Text style={styles.subtitle}>Study Progress & Milestones</Text>
      </View>

      {/* Study Time Tracker */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Study Time</Text>
        <View style={styles.row}>
          <Text style={styles.bigText}>Total Study Time: 25h 30m</Text>
          <ProgressBarAndroid styleAttr="Horizontal" color="#4CAF50" progress={0.5} />
        </View>
        <Text>Today's Study Time: 3h 20m</Text>
        <ProgressBarAndroid styleAttr="Horizontal" color="#FFA726" progress={0.7} />
      </View>

      {/* Goals Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Goals Overview</Text>
        <Text>Goal: 50 hours this month</Text>
        <ProgressBarAndroid styleAttr="Horizontal" color="#4CAF50" progress={0.5} />
        <Text>Algebra Lessons - 65% Completed</Text>
        <ProgressBarAndroid styleAttr="Horizontal" color="#FFEB3B" progress={0.65} />
      </View>

      {/* Milestones Tracker */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Milestones Achieved</Text>
        <Text>Milestone: 10 hours in Math Practice</Text>
        <ProgressBarAndroid styleAttr="Horizontal" color="#4CAF50" progress={1.0} />
        <Text>Milestone: Physics Chapter 1 - 70%</Text>
        <ProgressBarAndroid styleAttr="Horizontal" color="#9E9E9E" progress={0.7} />
      </View>

      {/* Gamification Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievement Badges</Text>
        <View style={styles.badges}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.badge} />
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.badge} />
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.badge} />
        </View>
        <Text style={styles.sectionTitle}>Leveling Up</Text>
        <Text>Current Level: 3 – Progress to next level: 60%</Text>
        <ProgressBarAndroid styleAttr="Horizontal" color="#4CAF50" progress={0.6} />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Log Study Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Set New Goal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  backText: {
    fontSize: 16,
    color: "#2196F3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#757575",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  bigText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  badges: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  badge: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ProgressDashboard;
