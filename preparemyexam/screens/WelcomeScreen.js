import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, Linking } from "react-native";

const { width } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  const [carouselItems] = useState([
    {
      title: "Discover Exams Easily",
      description: "Search for exams with detailed information on syllabus, dates, and difficulty level.",
      illustration: "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Access Curated Study Materials",
      description: "Download textbooks, notes, and PDFs from trusted sources.",
      illustration: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Practice with Mock Tests",
      description: "Test your knowledge with adaptive mock tests and performance analytics.",
      illustration: "https://images.pexels.com/photos/207756/pexels-photo-207756.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.illustration }} style={styles.image} />
      <Text style={styles.carouselTitle}>{item.title}</Text>
      <Text style={styles.carouselDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Image source={{ uri: "https://www.24by7mart.shop/wp-content/uploads/2025/01/Black-Circle-Icon-Business-Logo-e1736163684758.png" }} style={styles.logo} />
      <Text style={styles.tagline}>Your Success Partner for Exam Preparation</Text>

      {/* Body Section with FlatList for Carousel */}
      <FlatList
        data={carouselItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
      />

      {/* Call-to-Action Section */}
      <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.ctaButtonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Log In.</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <Text style={styles.footerText}>
        By continuing, you agree to our{" "}
        <Text style={styles.link} onPress={() => Linking.openURL("#")}>
          Terms of Service
        </Text>{" "}
        and{" "}
        <Text style={styles.link} onPress={() => Linking.openURL("#")}>
          Privacy Policy
        </Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 40,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  carouselContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  carouselItem: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    width: width * 0.8,
  },
  image: {
    width: 320,
    height: 320,
    marginBottom: 10,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  carouselDescription: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: "80%",
  },
  ctaButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 14,
    color: "#4CAF50",
    marginTop: 15,
  },
  footerText: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    color: "#4CAF50",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
