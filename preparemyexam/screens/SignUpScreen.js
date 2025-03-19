import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
  Alert,
  ActivityIndicator,
} from "react-native";
import { authAPI } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const SignUpScreen = () => {
  const navigation = useNavigation(); // Hook for navigation

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    try {
      if (!validateEmail(email)) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }
      
      setErrorMessage("");
      const userData = {
        email,
        password,
        username: email.split('@')[0],
        fullName: fullName,
        educationLevel: 'undergraduate'
      };

      const response = await authAPI.register(userData);
      const { token, user } = response.data;

      // Store the token and user data
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));

      Alert.alert('Success', 'Registration successful!');
      navigation.navigate('Main');
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'An error occurred during registration');
      Alert.alert('Registration Failed', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>
        Sign up to start your journey with PrepareMyExam.
      </Text>

      {/* Body Section */}
      <View style={styles.form}>
        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#777" style={styles.icon} />
          <TextInput
            placeholder="Enter your full name"
            style={styles.input}
          />
        </View>

        {/* Email Address */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#777" style={styles.icon} />
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        {/* Password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#777" style={styles.icon} />
          <TextInput
            placeholder="Create a password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconRight}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#777"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Social Login Options */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Or sign up with</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_Icon.png",
          }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <Ionicons name="logo-facebook" size={20} color="#fff" style={styles.socialIcon} />
        <Text style={[styles.socialButtonText, styles.facebookText]}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>

      {/* Call-to-Action Section */}
      <TouchableOpacity style={styles.ctaButton} onPress={handleSignUp}>
        <Text style={styles.ctaButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Log In.</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <Text style={styles.footerText}>
        By signing up, you agree to our{" "}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: "auto",
  },
  input: {
    flex: 1,
    height: 40,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#555",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    borderColor: "#3b5998",
  },
  facebookText: {
    color: "#fff",
  },
  ctaButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  ctaButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 14,
    color: "#4CAF50",
    marginTop: 10,
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

export default SignUpScreen;

